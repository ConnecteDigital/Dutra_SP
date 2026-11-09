// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
// O domínio fica em astro.config.mjs (constante DOMINIO).

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5511927483973';

export const site = {
  name: 'Hidro Dutra SP',
  shortName: 'Hidro Dutra SP',
  url: (import.meta.env.SITE ?? '').replace(/\/$/, ''),
  city: 'São Paulo',
  // Como a região aparece nos textos ("em São Paulo")
  regiao: 'São Paulo',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (11) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  arrivalMinutes: 20,
  description:
    'Desentupidora e limpa fossa 24 horas em São Paulo. Desentupimento de pia, ralo, vaso sanitário, cano e esgoto, hidrojateamento e limpeza de caixa de gordura. Chegamos em até 20 minutos.',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Vim pelo site e preciso de uma desentupidora.';

// Sempre link normal para api.whatsapp.com/send (o rastreamento do GTM depende desse formato).
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager: ÚNICO rastreamento do site.
// Não colar gtag/js, AW- ou GT- no código: tudo fica dentro do GTM.
export const gtmId = 'GTM-P8M6GGLD';
