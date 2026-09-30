const hudConfig = {
  brand: {
    name: 'AVERO',
    subtitle: 'CITY',
    accent: '#f91cf9',
    accentSecondary: '#7d6dff',
    accentSoft: '#52ebff'
  },
  money: {
    cash: '$ 15.800',
    bank: '$ 138.420',
    wanted: '1★'
  },
  speed: {
    value: '040',
    unit: 'KM/H'
  },
  health: {
    value: '100%'
  },
  minimap: {
    label: 'MAP'
  },
  status: {
    tag: 'ON DUTY'
  }
};

const root = document.documentElement;
root.style.setProperty('--hud-accent', hudConfig.brand.accent);
root.style.setProperty('--hud-accent-2', hudConfig.brand.accentSecondary);
root.style.setProperty('--hud-accent-3', hudConfig.brand.accentSoft);

document.querySelector('.brand-logo').textContent = hudConfig.brand.name;
document.querySelector('.brand-sub').textContent = hudConfig.brand.subtitle;
document.querySelector('.cash').textContent = hudConfig.money.cash;
document.querySelector('.bank').textContent = hudConfig.money.bank;
document.querySelector('.wanted').textContent = hudConfig.money.wanted;
document.querySelector('.speed-number').textContent = hudConfig.speed.value;
document.querySelector('.speed-unit').textContent = hudConfig.speed.unit;
document.querySelector('.hp-num').textContent = hudConfig.health.value;
document.querySelector('.status-tag').textContent = hudConfig.status.tag;

const rpmValue = document.querySelector('.gauge-inner span');
if (rpmValue) rpmValue.textContent = '0';
