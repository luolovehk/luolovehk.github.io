function fetchFunds() {
    const codes = document.getElementById('fundCodes').value.split(/\s+/).filter(Boolean);
    const tbody = document.getElementById('resultBody');
    tbody.innerHTML = '';
    document.getElementById('updateTime').textContent = '更新时间：' + new Date().toLocaleString();
    showLoadingMask(true, 0, codes.length);
    fetchFundsCollectAll(codes, tbody);
}

async function fetchFundsCollectAll(codes, tbody) {
    let allData = [];
    for (let i = 0; i < codes.length; i++) {
        let data = await fetchFundDataForCollect(codes[i].trim());
        allData.push(data);
        showLoadingMask(true, i+1, codes.length);
        // 随机延时 300~1200ms
        if (i < codes.length - 1) {
            const delay = 30 + Math.floor(Math.random() * 90);
            await new Promise(res => setTimeout(res, delay));
        }
    }
    // 计算每列最大最小值
    let sylCols = [2,3,4,5];
    let bdCols = [7];
    let minmax = {};
    for (let col of sylCols.concat(bdCols)) {
        let vals = allData.map(row=>parseFloat(row[col])).filter(x=>!isNaN(x));
        minmax[col] = {min: Math.min(...vals), max: Math.max(...vals)};
    }
    // 渲染表格
    for (let row of allData) {
        let tr = document.createElement('tr');
        for (let i = 0; i < 14; i++) tr.appendChild(document.createElement('td'));
        tr.cells[0].textContent = row[0];
        tr.cells[1].textContent = row[1];
        for (let idx of sylCols) {
            tr.cells[idx].innerHTML = colorize(row[idx]+"%", minmax[idx].min, minmax[idx].max);
        }
        for (let idx of bdCols) {
            tr.cells[idx].innerHTML = colorize(row[idx], minmax[idx].min, minmax[idx].max);
        }
        tr.cells[6].textContent = row[6];
        tr.cells[8].textContent = row[8];
        tr.cells[9].innerHTML = row[9];
        tr.cells[10].textContent = row[10];
        tr.cells[11].innerHTML = row[11];
        tr.cells[12].innerHTML = row[12];
        tr.cells[13].innerHTML = row[13];
        tbody.appendChild(tr);
    }
    showLoadingMask(false);
}

async function fetchFundDataForCollect(code) {
    let row = Array(14).fill('');
    row[0] = code;
    try {
        const url = `https://fund.eastmoney.com/pingzhongdata/${code}.js`;
        const resp = await fetchWithCorsProxy(url);
        const text = await resp.text();
        row[1] = extractVar(text, /var fS_name = "([^"]+)";/);
        // 收益率
        row[2] = parseFloat(extractVar(text, /var syl_1n="([^"]+)";/));
        row[3] = parseFloat(extractVar(text, /var syl_6y="([^"]+)";/));
        row[4] = parseFloat(extractVar(text, /var syl_3y="([^"]+)";/));
        row[5] = parseFloat(extractVar(text, /var syl_1y="([^"]+)";/));
        // 波动数据
        let fluct = text.match(/var Data_fluctuationScale = \{"categories":\[[^\]]+\],"series":\[(.*?)\]\};/);
        if (fluct) {
            let series = fluct[1];
            let matches = [...series.matchAll(/\{"y":([\d\.\-]+),"mom":"([^"]+)"\}/g)];
            if (matches.length) {
                let last = matches[matches.length - 1];
                row[6] = parseFloat(last[1]);
                row[7] = parseFloat(last[2]);
            }
        }
        // 净值趋势
        let netWorth = text.match(/var Data_netWorthTrend = \[(.*?)\];/);
        if (netWorth) {
            let trend = netWorth[1];
            let matches = [...trend.matchAll(/\{"x":\d+,"y":([\d\.]+),"equityReturn":([\d\.-]+),/g)];
            if (matches.length) {
                let last = matches[matches.length - 1];
                row[8] = last[1];
                let change = last[2];
                let colorClass = '';
                if (!isNaN(change)) {
                    colorClass = change > 0 ? 'rise' : (change < 0 ? 'fall' : '');
                }
                row[9] = `<span class="${colorClass}">${change}%</span>`;
            }
        }
        // 插入图片
        row[11] = `<div class='img-hover'><span class='img-tip'>查看</span><img src='http://j4.dfcfw.com/charts/pic6/${code}.png' alt='净值估算图'></div>`;
        row[12] = `<div class='img-hover'><span class='img-tip'>查看</span><img src='http://j3.dfcfw.com/images/JJJZ1/${code}.png' alt='单位净值走势'></div>`;
        row[13] = `<div class='img-hover'><span class='img-tip'>查看</span><img src='http://j6.dfcfw.com/charts/StockPos/${code}.png' alt='持仓前10名'></div>`;
        // 腾讯行情
        let tcode = code.startsWith('5') ? 'sh' + code : code.startsWith('1') ? 'sz' + code : '';
        if (tcode) {
            const turl = `https://qt.gtimg.cn/q=${tcode}`;
            try {
                const tresp = await fetchWithCorsProxy(turl);
                const ttext = await tresp.text();
                let arr = ttext.split('~');
                row[10] = arr[3] || '';
            } catch {}
        }
    } catch (e) {
        row[1] = '获取失败';
    }
    return row;
}

function colorize(val, min, max) {
    if (typeof val !== 'string') val = String(val);
    let num = parseFloat(val.replace('%',''));
    if (isNaN(num)) return val;
    let bg = (typeof min === 'number' && typeof max === 'number') ? `background-color:${getColorByValue(num, min, max)};color:#222;` : '';
    return `<span style="${bg}">${val}</span>`;
}

function extractVar(text, regex) {
    let m = text.match(regex);
    return m ? m[1] : '';
}

async function fetchWithCorsProxy(url) {
    // 多CORS代理尝试，防止跨域失败
    let proxies = [
        '',
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url=',
        'https://bird.ioliu.cn/v1/?url='
    ];
    for (let proxy of proxies) {
        try {
            let resp = await fetch(proxy + url);
            if (resp.ok) return resp;
        } catch {}
    }
    throw new Error('全部代理均失败');
}

function getColorByValue(val, min, max) {
    let num = parseFloat(val);
    if (isNaN(num)) return '';
    // 负为绿，零为白，正为红，红在左，绿在右
    let percent = 0.5;
    if (max > 0 && min < 0) {
        // 有正有负
        if (num >= 0) {
            percent = 0.5 - 0.5 * (num / max);
        } else {
            percent = 0.5 + 0.5 * (num / min);
        }
    } else if (max <= 0) {
        // 全负
        percent = 1;
    } else if (min >= 0) {
        // 全正
        percent = 0;
    }
    percent = Math.max(0, Math.min(1, percent));
    // 0: 红 #e74c3c，0.5: 白 #fff，1: 绿 #1abc9c
    if (percent < 0.5) {
        // 红到白
        let p = percent / 0.5;
        let r = Math.round(231 + (255-231)*p);
        let g = Math.round(76 + (255-76)*p);
        let b = Math.round(60 + (255-60)*p);
        return `rgb(${r},${g},${b})`;
    } else {
        // 白到绿
        let p = (percent-0.5)/0.5;
        let r = Math.round(255 + (26-255)*p);
        let g = Math.round(255 + (188-255)*p);
        let b = Math.round(255 + (156-255)*p);
        return `rgb(${r},${g},${b})`;
    }
}

function showLoadingMask(show, progress, total) {
    const mask = document.getElementById('loadingMask');
    const text = document.getElementById('loadingText');
    if (show) {
        mask.style.display = 'flex';
        if (typeof progress === 'number' && typeof total === 'number') {
            text.textContent = `数据加载中...（${progress}/${total}）`;
        } else {
            text.textContent = '数据加载中...';
        }
    } else {
        mask.style.display = 'none';
    }
}