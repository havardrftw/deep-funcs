const deepMap = (proc, [hd, ...tl]) => 
    (!hd) ? 
        [] : 
        ((Array.isArray(hd)) ? 
            [deepMap(proc, hd), ...deepMap(proc, tl)] : 
            [proc(hd), ...deepMap(proc, tl)]);


const deepReplace = (x, y, [hd, ...tl]) => 
    (!hd) ? 
        [] : 
        ((Array.isArray(hd)) ? 
            [deepReplace(x, y, hd), ...deepReplace(x, y, tl)] : 
            [((hd === x) ? y : hd), ...deepReplace(x, y, tl)]);


const deepFilter = (pred, [hd, ...tl]) => 
    (!hd) ? 
        [] : 
        ((Array.isArray(hd)) ? 
            [deepFilter(pred, hd), ...deepFilter(pred, tl)] : 
            ((pred(hd)) ? 
                [hd, ...deepFilter(pred, tl)] :
                deepFilter(pred, tl)));