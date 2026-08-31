export const site = {
  name: 'RI Impermeabilização',
  legalName: 'RI Impermeabilização da Construção Civil Ltda.',
  url: 'https://rimpermeabilizacao.com.br',
  locale: 'pt_BR',
  language: 'pt-BR',
  defaultImage: '/images/Banner-1920-x-700-px-1.png',
  description:
    'Empresa de impermeabilização em Itu e região. Soluções para lajes, piscinas e obras residenciais, comerciais e industriais.',
  phone: '+55 11 4013-1615',
  whatsapp: '+55 11 91735-1151',
  whatsappNumber: '5511917351151',
  email: 'rimpermeabilizacaoadm@gmail.com',
  businessHours: 'Seg a Sex, 08:00 às 17:00',
  address: {
    streetAddress: 'Rua Paula Souza, 395 B, sobreloja',
    addressLocality: 'Itu',
    addressRegion: 'SP',
    postalCode: '13300-050',
    addressCountry: 'BR',
  },
  social: [
    'https://www.facebook.com/Reginaldo.negocio',
    'https://www.instagram.com/rimpermeabilizacao/',
  ],
  links: {
    facebook: 'https://www.facebook.com/Reginaldo.negocio',
    instagram: 'https://www.instagram.com/rimpermeabilizacao/',
    googleBusiness:
      'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJwfIcwmSH5KYR7sWqpgC2vxI',
    mapEmbed: 'https://www.google.com/maps?q=Rua+Paula+Souza,+395+B,+Centro,+Itu,+SP&z=16&output=embed',
  },
} as const;

export const contact = {
  phoneHref: `tel:+${site.phone.replace(/\D/g, '')}`,
  phoneDisplay: '(11) 4013-1615',
  whatsappDisplay: '(11) 91735-1151',
  emailHref: `mailto:${site.email}`,
  addressLine: `${site.address.streetAddress} — ${site.address.addressLocality} · ${site.address.addressRegion}`,
};

export const whatsappUrl = (origin = 'site', message?: string) => {
  const text =
    message ??
    `Olá! Vim pelo site da RI Impermeabilização (${origin}) e gostaria de solicitar uma avaliação.`;

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
