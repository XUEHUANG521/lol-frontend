export const regionMap: Record<string, string> = {
	'na': 'na1',
	'me': 'me1',
	'euw': 'euw1',
	'eune': 'eun1',
	'oce': 'oc1',
	'kr': 'kr',
	'jp': 'jp1',
	'br': 'br1',
	'las': 'la2',
	'lan': 'la1',
	'ru': 'ru',
	'tr': 'tr1',
	'sg': 'sg',
	'ph': 'ph',
	'tw': 'tw',
	'vn': 'vn',
	'th': 'th'
  };
  
  export interface Region {
	code: string;
	name: string;
	icon: string;
  }
  
  export const regions: Region[] = [
	{ code: 'na', name: 'North America', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-na.svg?v=1721451321478' },
	{ code: 'me', name: 'Middle East', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-me.svg?v=1721451321478' },
	{ code: 'euw', name: 'Europe West', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-euw.svg?v=1721451321478' },
	{ code: 'eune', name: 'Europe Nordic & East', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-eune.svg?v=1721451321478' },
	{ code: 'oce', name: 'Oceania', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-oce.svg?v=1721451321478' },
	{ code: 'kr', name: 'Korea', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-kr.svg?v=1721451321478' },
	{ code: 'jp', name: 'Japan', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-jp.svg?v=1721451321478' },
	{ code: 'br', name: 'Brazil', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-br.svg?v=1721451321478' },
	{ code: 'las', name: 'LAS', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-las.svg?v=1721451321478' },
	{ code: 'lan', name: 'LAN', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-lan.svg?v=1721451321478' },
	{ code: 'ru', name: 'Russia', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-ru.svg?v=1721451321478' },
	{ code: 'tr', name: 'Türkiye', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-tr.svg?v=1721451321478' },
	{ code: 'sg', name: 'Singapore', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-si.svg?v=1721451321478' },
	{ code: 'ph', name: 'Philippines', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-ph.svg?v=1721451321478' },
	{ code: 'tw', name: 'Taiwan', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-ta.svg?v=1721451321478' },
	{ code: 'vn', name: 'Vietnam', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-vi.svg?v=1721451321478' },
	{ code: 'th', name: 'Thailand', icon: 'https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-th.svg?v=1721451321478' },
  ];
  