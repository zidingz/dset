export function merge(a, b) {
	if (typeof a === 'object' && typeof b === 'object')  {
		if (Array.isArray(a) && Array.isArray(b)) {
			for (let i=0; i < b.length; i++) {
				a[i] = merge(a[i], b[i]);
			}
		} else {
			for (let k in b) {
				a[k] = merge(a[k], b[k]);
			}
		}
		return a;
	}
	return b;
}

export function dset(obj, keys, val) {
	keys.split && (keys=keys.split('.'));
	var i=0, l=keys.length, t=obj, x, k;
	for (; i < l;) {
		k = keys[i++];
		if (k === '__proto__' || k === 'constructor' || k === 'prototype') break;
		t = t[k] = (i === l) ? merge(t[k],val) : (typeof(x=t[k])===typeof keys) ? x : (keys[i]*0 !== 0 || !!~(''+keys[i]).indexOf('.')) ? {} : [];
	}
}

