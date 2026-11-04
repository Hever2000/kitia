export const NAV_LINKS = [
  { label: 'Producto', href: '#producto' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
]

export const CHANNELS = [
  'WhatsApp',
  'Web Chat',
  'Telegram',
  'Instagram',
  'Messenger',
  'Slack',
  'HubSpot',
  'Salesforce',
  'Shopify',
  'Zapier',
  'Google Sheets',
  'Notion',
]

export const FEATURES = [
  {
    icon: 'bolt',
    title: 'Respuestas instantáneas con IA',
    desc: 'Kitia entiende la intención, consulta tu base de conocimiento y responde en segundos con el tono de tu marca.',
    tag: '24/7',
  },
  {
    icon: 'channels',
    title: 'Integración multi-canal',
    desc: 'WhatsApp, web, Telegram, Instagram y más. Un solo cerebro de IA para todas tus conversaciones.',
    tag: '5+ canales',
  },
  {
    icon: 'analytics',
    title: 'Dashboard de analíticas',
    desc: 'Conversaciones, intenciones, resolución y satisfacción en tiempo real. Decidí con datos, no con intuición.',
    tag: 'Tiempo real',
  },
  {
    icon: 'handoff',
    title: 'Transferencia a agentes humanos',
    desc: 'Cuando la conversación lo necesita, Kitia deriva con todo el contexto a la persona indicada. Sin repetir información.',
    tag: 'Handoff',
  },
]

export const BEFORE_ITEMS = [
  'Horas respondiendo las mismas preguntas',
  'Leads que se enfrían fuera de horario',
  'Clientes esperando en tres canales a la vez',
  'Equipo saturado en picos de demanda',
  'Conversaciones que nadie mide ni aprovecha',
]

export const AFTER_ITEMS = [
  'IA resolviendo consultas en segundos',
  'Captura de leads 24/7, incluso sin agentes',
  'Una sola bandeja para todos los canales',
  'Tu equipo enfocado en casos de alto valor',
  'Analíticas claras de cada conversación',
]

export const STEPS = [
  {
    number: '01',
    title: 'Conectá tus canales',
    desc: 'Sumá WhatsApp, tu web o Telegram en minutos. Sin código, sin migrar tus sistemas y sin frenar tu operación.',
  },
  {
    number: '02',
    title: 'Entrená tu bot',
    desc: 'Importá tu sitio, PDFs o base de conocimiento. Kitia aprende tu negocio, tus productos y tu forma de hablar.',
  },
  {
    number: '03',
    title: 'Activá y desplegá',
    desc: 'Probá el bot en un entorno seguro, definí las reglas de derivación y publicalo cuando esté listo.',
  },
  {
    number: '04',
    title: 'Medí y optimizá',
    desc: 'Seguí conversaciones, resoluciones y satisfacción. Kitia mejora con cada interacción y tu equipo también.',
  },
]

export const VALUES = [
  {
    title: 'Automatización con criterio',
    desc: 'La IA resuelve lo repetitivo; las personas se quedan con lo que requiere empatía y decisión.',
  },
  {
    title: 'Implementación sin fricción',
    desc: 'Sin proyectos eternos ni equipos técnicos dedicados. Kitia se integra a tu operación en días, no en meses.',
  },
  {
    title: 'Tus datos, siempre tuyos',
    desc: 'Infraestructura segura, cifrado de punta a punta y control total sobre lo que aprende tu bot.',
  },
]

export const STATS = [
  { number: '24/7', label: 'Atención sin pausas' },
  { number: '<10s', label: 'Respuesta promedio' },
  { number: '40+', label: 'Integraciones' },
  { number: '99.9%', label: 'Uptime' },
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    priceMonthly: 0,
    priceAnnual: 0,
    desc: 'Probá Kitia y automatizá tus primeras conversaciones.',
    cta: 'Empezá gratis',
    highlight: false,
    features: [
      '1 chatbot activo',
      '100 conversaciones por mes',
      'Chat web',
      'Entrenamiento con 20 páginas',
      'Analíticas básicas',
      'Soporte por email',
    ],
  },
  {
    name: 'Growth',
    priceMonthly: 79,
    priceAnnual: 59,
    desc: 'Para equipos que escalan soporte y ventas sin sumar headcount.',
    cta: 'Probar 14 días gratis',
    highlight: true,
    features: [
      '5 chatbots activos',
      '3.000 conversaciones por mes',
      'WhatsApp, Telegram y Web',
      'Entrenamiento ilimitado',
      'Transferencia a agentes humanos',
      'Integraciones con CRM',
      'Analíticas avanzadas',
      'Soporte prioritario',
    ],
  },
  {
    name: 'Enterprise',
    priceMonthly: null,
    priceAnnual: null,
    desc: 'Operaciones grandes con necesidades, volumen y seguridad propios.',
    cta: 'Hablemos',
    highlight: false,
    features: [
      'Chatbots ilimitados',
      'Conversaciones a medida',
      'SSO y control de roles',
      'Onboarding dedicado',
      'SLA 99.9%',
      'Integraciones custom',
      'Seguridad avanzada',
      'Soporte 24/7',
    ],
  },
]

export const FAQS = [
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'La mayoría de los equipos publica su primer bot en menos de una semana. Conectás un canal, cargás tu base de conocimiento y revisás las respuestas antes de activarlo.',
  },
  {
    q: '¿En qué canales funciona Kitia?',
    a: 'WhatsApp, chat web, Telegram, Instagram y Messenger, además de integraciones vía API con Slack, HubSpot, Salesforce, Shopify, Google Sheets y Zapier.',
  },
  {
    q: '¿Cómo aprende el bot sobre mi negocio?',
    a: 'Podés importar tu sitio web, documentos, FAQs y catálogos. Kitia usa esa información para responder con precisión y con el tono de tu marca. También podés corregir respuestas y agregar instrucciones cuando quieras.',
  },
  {
    q: '¿Qué pasa si el bot no sabe responder?',
    a: 'Deriva automáticamente a un agente humano con todo el contexto de la conversación. Definís las reglas por tema, horario, tipo de cliente o nivel de confianza de la IA.',
  },
  {
    q: '¿Se integra con mi CRM?',
    a: 'Sí. Kitia se conecta con HubSpot, Salesforce, Pipedrive y otros vía API o Zapier para crear leads, actualizar contactos y registrar conversaciones sin trabajo manual.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Ciframos los datos en tránsito y en reposo, aplicamos control de acceso por roles y no usamos tu información para entrenar modelos de terceros. Los planes Enterprise incluyen SSO y residencia de datos.',
  },
  {
    q: '¿Hay una prueba gratis?',
    a: 'Sí. El plan Starter es gratis para siempre y los planes pagos incluyen 14 días de prueba sin tarjeta de crédito.',
  },
]
