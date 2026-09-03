# 📋 Documentação Completa - Banner de Consentimento LGPD

> Documentação técnica completa da implementação do banner de consentimento de cookies conforme LGPD (Lei Geral de Proteção de Dados).

**Última atualização:** Fevereiro de 2026  
**Versão:** 1.0  
**Framework:** Astro 4.x

---

## 📑 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Componente Principal](#componente-principal)
4. [Configuração e Integração](#configuração-e-integração)
5. [Páginas de Políticas](#páginas-de-políticas)
6. [Armazenamento de Consentimento](#armazenamento-de-consentimento)
7. [Integração com Analytics](#integração-com-analytics)
8. [Personalização e Estilo](#personalização-e-estilo)
9. [API JavaScript](#api-javascript)
10. [Guia de Implementação em Outro Site](#guia-de-implementação)

---

## 🎯 Visão Geral

### Funcionalidades Principais

- ✅ **Banner inicial** exibido na primeira visita
- ✅ **Modal de preferências** para personalização granular
- ✅ **3 categorias de cookies:**
  - Necessários (sempre ativos)
  - Análise/Analytics (Google Analytics)
  - Marketing (Meta Pixel, anúncios)
- ✅ **Armazenamento dual:** localStorage + cookie
- ✅ **Carregamento condicional** de scripts de terceiros
- ✅ **API JavaScript** para abrir preferências via Footer
- ✅ **Conformidade LGPD** e boas práticas de privacidade

### Fluxo de Usuário

```
┌─────────────────────────────────────────┐
│  Usuário acessa site pela 1ª vez       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  Banner LGPD aparece (bottom)           │
│  ┌─────────────────────────────────┐   │
│  │ [Rejeitar] [Personalizar] [✓]   │   │
│  └─────────────────────────────────┘   │
└──┬───────────┬───────────────┬──────────┘
   │           │               │
   ▼           ▼               ▼
┌──────┐   ┌───────┐      ┌────────┐
│Reject│   │Custom │      │Accept  │
│All   │   │Modal  │      │All     │
└──┬───┘   └───┬───┘      └───┬────┘
   │           │              │
   └───────────┴──────────────┘
               │
               ▼
   ┌────────────────────────┐
   │ Salva em localStorage  │
   │ + cookie persistente   │
   └────────────┬───────────┘
                │
                ▼
   ┌─────────────────────────┐
   │ Carrega scripts conforme│
   │ consentimento do usuário│
   └─────────────────────────┘
```

---

## 📁 Estrutura de Arquivos

```
src/
├── components/
│   └── LgpdConsent.astro         # Componente principal do banner
├── layouts/
│   ├── Layout.astro               # Layout base (HTML + head)
│   └── BaseLayout.astro           # Layout com navbar/footer + LGPD
└── pages/
    ├── cookies.astro              # Página Política de Cookies
    └── privacidade.astro          # Página Política de Privacidade
```

---

## 🧩 Componente Principal

### Arquivo: `src/components/LgpdConsent.astro`

#### 1. Configuração (Frontmatter)

```astro
---
/**
 * LGPD Cookie Consent (Astro)
 * - categorias: necessary | analytics | marketing
 * - salva preferências em localStorage + cookie (opcional)
 * - expõe window.__lgpd.open() pra abrir o modal via footer
 */
const POLICY_URL = "/privacidade";
const COOKIES_URL = "/cookies";
---
```

**Variáveis:**
- `POLICY_URL`: Link para página de política de privacidade
- `COOKIES_URL`: Link para página de política de cookies

#### 2. Estrutura HTML

##### Banner Inicial
```html
<!-- Banner (primeiro acesso) -->
<div class="lgpd-banner" id="lgpd-banner" role="dialog" aria-live="polite" aria-label="Consentimento de cookies">
  <div class="lgpd-row">
    <div class="lgpd-text">
      Usamos cookies essenciais para o site funcionar. Com seu consentimento, também usamos cookies de
      <b>análise</b> e <b>marketing</b> para melhorar a experiência e medir campanhas.
      Veja nossa <a href={POLICY_URL}>Política de Privacidade</a> e <a href={COOKIES_URL}>Política de Cookies</a>.
    </div>
    <div class="lgpd-actions">
      <button class="btn ghost" type="button" id="lgpd-reject">Rejeitar</button>
      <button class="btn" type="button" id="lgpd-customize">Personalizar</button>
      <button class="btn primary" type="button" id="lgpd-accept">Aceitar tudo</button>
    </div>
  </div>
</div>
```

##### Modal de Preferências
```html
<!-- Modal de preferências -->
<div class="lgpd-modal" id="lgpd-modal" role="dialog" aria-label="Preferências de cookies">
  <h3>Preferências de cookies</h3>
  <div style="font-size:14px;opacity:.92">
    Você pode ativar/desativar categorias a qualquer momento.
  </div>

  <div class="lgpd-cats">
    <!-- Cookies Necessários (sempre ativos) -->
    <div class="cat">
      <div class="switch">
        <input type="checkbox" checked disabled aria-label="Cookies necessários (sempre ativos)" />
      </div>
      <div>
        <b>Necessários</b>
        <small>Essenciais para funcionamento do site e segurança. Sempre ativos.</small>
      </div>
    </div>

    <!-- Cookies de Análise (opcional) -->
    <div class="cat">
      <div class="switch">
        <input type="checkbox" id="lgpd-analytics" aria-label="Cookies de análise" />
      </div>
      <div>
        <b>Análise</b>
        <small>Ajuda a entender uso do site (ex.: Google Analytics).</small>
      </div>
    </div>

    <!-- Cookies de Marketing (opcional) -->
    <div class="cat">
      <div class="switch">
        <input type="checkbox" id="lgpd-marketing" aria-label="Cookies de marketing" />
      </div>
      <div>
        <b>Marketing</b>
        <small>Ajuda a medir campanhas e anúncios (ex.: Meta Pixel).</small>
      </div>
    </div>
  </div>

  <div class="lgpd-footer">
    <button class="btn ghost" type="button" id="lgpd-cancel">Cancelar</button>
    <button class="btn primary" type="button" id="lgpd-save">Salvar preferências</button>
  </div>
</div>
```

##### Backdrop (fundo escuro do modal)
```html
<div class="lgpd-backdrop" id="lgpd-backdrop" aria-hidden="true"></div>
```

#### 3. Estilos CSS

**Características:**
- Design moderno com bordas arredondadas e sombras
- Responsivo (mobile-first)
- Dark theme (fundo escuro)
- Glassmorphism sutil
- Animações suaves

```css
/* Backdrop (fundo do modal) */
.lgpd-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.45);
  z-index: 9998;
  display: none;
}

/* Banner principal */
.lgpd-banner {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  max-width: 980px;
  margin: 0 auto;
  background: #0f172a;
  color: #fff;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 18px 50px rgba(0,0,0,.35);
  display: none;
}

/* Layout flex do banner */
.lgpd-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

/* Texto do banner */
.lgpd-text {
  font-size: 14px;
  line-height: 1.45;
  opacity: .95;
  max-width: 680px;
}

.lgpd-text a {
  color: #93c5fd;
  text-decoration: underline;
}

/* Container de botões */
.lgpd-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Botões base */
.btn {
  border: 1px solid rgba(255,255,255,.18);
  background: transparent;
  color: #fff;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
}

/* Botão primário (aceitar) */
.btn.primary {
  background: #22c55e;
  border-color: #22c55e;
  color: #052e16;
}

/* Botão ghost (rejeitar/cancelar) */
.btn.ghost {
  background: rgba(255,255,255,.08);
}

/* Modal de preferências */
.lgpd-modal {
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  max-width: 720px;
  margin: 0 auto;
  background: #0b1220;
  color: #fff;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 14px;
  padding: 16px;
  display: none;
}

.lgpd-modal h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
}

/* Grid de categorias */
.lgpd-cats {
  display: grid;
  gap: 10px;
  margin: 10px 0 14px 0;
}

/* Card de categoria */
.cat {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  border: 1px solid rgba(255,255,255,.10);
  border-radius: 12px;
  padding: 12px;
  background: rgba(255,255,255,.04);
}

.cat small {
  display: block;
  opacity: .85;
  margin-top: 2px;
}

/* Switch/checkbox */
.switch {
  margin-top: 2px;
}

.switch input {
  transform: scale(1.1);
}

/* Footer do modal */
.lgpd-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
}
```

#### 4. JavaScript (Lógica Principal)

##### Constantes e Elementos DOM

```javascript
const STORAGE_KEY = "predlead_lgpd_consent_v1";

const banner = document.getElementById("lgpd-banner");
const modal = document.getElementById("lgpd-modal");
const backdrop = document.getElementById("lgpd-backdrop");

const btnAccept = document.getElementById("lgpd-accept");
const btnReject = document.getElementById("lgpd-reject");
const btnCustomize = document.getElementById("lgpd-customize");

const chkAnalytics = document.getElementById("lgpd-analytics");
const chkMarketing = document.getElementById("lgpd-marketing");

const btnCancel = document.getElementById("lgpd-cancel");
const btnSave = document.getElementById("lgpd-save");
```

##### Funções de Armazenamento

```javascript
// Lê consentimento salvo
function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { 
    return null; 
  }
}

// Salva consentimento
function writeConsent(consent) {
  const payload = {
    ...consent,
    necessary: true,
    ts: new Date().toISOString(),
    v: 1
  };
  
  // Salva no localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

  // Salva como cookie (opcional, facilitaria leitura server-side)
  document.cookie = `${STORAGE_KEY}=${encodeURIComponent(JSON.stringify(payload))}; Path=/; Max-Age=31536000; SameSite=Lax`;
  
  return payload;
}
```

**Estrutura do objeto de consentimento:**
```json
{
  "necessary": true,
  "analytics": true,
  "marketing": false,
  "ts": "2026-02-21T10:30:00.000Z",
  "v": 1
}
```

##### Funções de UI

```javascript
// Mostra banner
function showBanner() {
  banner.style.display = "block";
}

// Esconde banner
function hideBanner() {
  banner.style.display = "none";
}

// Abre modal de preferências
function openModal(current) {
  if (current) {
    chkAnalytics.checked = !!current.analytics;
    chkMarketing.checked = !!current.marketing;
  }
  backdrop.style.display = "block";
  modal.style.display = "block";
}

// Fecha modal
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}
```

##### Integração com Scripts de Terceiros

```javascript
// Carrega Google Analytics
function enableAnalytics() {
  const gaId = document.documentElement.dataset.gaId;
  if (!gaId) return;

  if (window.__ga_loaded) return;
  window.__ga_loaded = true;

  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s1);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaId, { anonymize_ip: true });
}

// Carrega Meta Pixel
function enableMarketing() {
  const pixelId = document.documentElement.dataset.fbPixelId;
  if (!pixelId) return;

  if (window.__fb_loaded) return;
  window.__fb_loaded = true;

  !(function(f,b,e,v,n,t,s){
    if(f.fbq)return; n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
    n.queue=[]; t=b.createElement(e); t.async=!0;
    t.src=v; s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

// Aplica consentimento (carrega scripts)
function applyConsent(consent) {
  if (consent?.analytics) enableAnalytics();
  if (consent?.marketing) enableMarketing();

  // Evento customizado para integrar outras ferramentas
  window.dispatchEvent(new CustomEvent("lgpd:consent", { detail: consent }));
}
```

##### API Global

```javascript
// Expor API global para abrir preferências de qualquer lugar
window.__lgpd = {
  open: () => openModal(readConsent()),
  get: () => readConsent()
};
```

**Uso:**
```javascript
// Abrir modal de preferências de qualquer lugar no site
window.__lgpd.open();

// Obter consentimento atual
const consent = window.__lgpd.get();
console.log(consent);
```

##### Event Listeners e Inicialização

```javascript
// Botão: Aceitar tudo
btnAccept.addEventListener("click", () => {
  const saved = writeConsent({ analytics: true, marketing: true });
  hideBanner();
  closeModal();
  applyConsent(saved);
});

// Botão: Rejeitar
btnReject.addEventListener("click", () => {
  const saved = writeConsent({ analytics: false, marketing: false });
  hideBanner();
  closeModal();
  applyConsent(saved);
});

// Botão: Personalizar
btnCustomize.addEventListener("click", () => openModal(readConsent()));

// Botão: Cancelar (modal)
btnCancel.addEventListener("click", () => closeModal());

// Botão: Salvar preferências (modal)
btnSave.addEventListener("click", () => {
  const saved = writeConsent({
    analytics: chkAnalytics.checked,
    marketing: chkMarketing.checked
  });
  hideBanner();
  closeModal();
  applyConsent(saved);
});

// Inicialização: mostra banner se não houver consentimento
const existing = readConsent();
if (!existing) {
  showBanner();
} else {
  applyConsent(existing);
}
```

---

## ⚙️ Configuração e Integração

### 1. Layout Principal (`src/layouts/Layout.astro`)

```astro
---
interface Props {
  title: string;
  description: string;
  lang?: string;
}

const { title, description, lang = 'pt-BR' } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

// IDs para GA e Pixel (carregados via LGPD consent)
const GA_ID = import.meta.env.PUBLIC_GA_ID;
const FB_PIXEL_ID = import.meta.env.PUBLIC_FB_PIXEL_ID;
---

<!doctype html>
<html lang={lang} data-ga-id={GA_ID} data-fb-pixel-id={FB_PIXEL_ID}>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta name="theme-color" content="#4F46E5" />
    
    <!-- Primary Meta Tags -->
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href={canonicalURL} />
    
    <slot name="head" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

**Pontos importantes:**
- IDs do GA e Meta Pixel são lidos de `.env` via `import.meta.env`
- IDs são passados via `data-attributes` no `<html>`
- Scripts só são carregados após consentimento

### 2. BaseLayout (`src/layouts/BaseLayout.astro`)

```astro
---
import Layout from './Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import WhatsAppButton from '../components/WhatsAppButton.astro';
import LgpdConsent from '../components/LgpdConsent.astro';

interface Props {
  title: string;
  description: string;
  lang?: string;
  ogImage?: string;
}

const {
  title,
  description,
  lang = 'pt-BR',
  ogImage = '/og-image.png',
} = Astro.props;
---

<Layout title={title} description={description} lang={lang}>
  <Fragment slot="head">
    <!-- Open Graph, Twitter, Schema.org, etc. -->
  </Fragment>

  <Navbar />
  
  <main class="min-h-screen">
    <slot />
  </main>

  <Footer />
  
  <WhatsAppButton />
  
  <LgpdConsent />  <!-- 👈 Componente LGPD incluído aqui -->
</Layout>
```

**Observação:** O componente `<LgpdConsent />` é incluído no final do body, garantindo que apareça acima de todos os outros elementos.

### 3. Variáveis de Ambiente (`.env`)

```env
# Google Analytics 4
PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel (Facebook)
PUBLIC_FB_PIXEL_ID=123456789012345
```

**Importante:** Use o prefixo `PUBLIC_` para que as variáveis sejam expostas no client-side do Astro.

---

## 📄 Páginas de Políticas

### 1. Política de Cookies (`src/pages/cookies.astro`)

**Conteúdo essencial:**
- O que são cookies
- Tipos de cookies utilizados
- Como gerenciar/desativar cookies
- Links para documentação dos navegadores
- Informações legais da empresa

### 2. Política de Privacidade (`src/pages/privacidade.astro`)

**Conteúdo essencial:**
- Como coletamos dados
- Quais dados coletamos
- Base legal (LGPD)
- Direitos do usuário
- Como exercer direitos
- Contato do DPO (Data Protection Officer)

---

## 💾 Armazenamento de Consentimento

### localStorage

**Chave:** `predlead_lgpd_consent_v1`

**Estrutura do objeto:**
```json
{
  "necessary": true,
  "analytics": true,
  "marketing": false,
  "ts": "2026-02-21T10:30:00.000Z",
  "v": 1
}
```

**Campos:**
- `necessary`: sempre `true` (cookies essenciais)
- `analytics`: consentimento Google Analytics
- `marketing`: consentimento Meta Pixel
- `ts`: timestamp ISO do consentimento
- `v`: versão do schema (para migrações futuras)

### Cookie

**Nome:** `predlead_lgpd_consent_v1`  
**Valor:** JSON encoded (mesmo objeto do localStorage)  
**Duração:** 1 ano (31536000 segundos)  
**Atributos:** `Path=/; Max-Age=31536000; SameSite=Lax`

**Vantagem:** Permite ler consentimento no server-side (SSR/API) se necessário.

---

## 📊 Integração com Analytics

### Google Analytics 4 (GA4)

**Configuração:**
1. Adicionar ID no `.env`: `PUBLIC_GA_ID=G-XXXXXXXXXX`
2. Script carregado dinamicamente APENAS se `analytics: true`
3. IP anonymization ativado por padrão

**Código de carregamento:**
```javascript
function enableAnalytics() {
  const gaId = document.documentElement.dataset.gaId;
  if (!gaId) return;
  
  if (window.__ga_loaded) return;
  window.__ga_loaded = true;

  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s1);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaId, { anonymize_ip: true });
}
```

### Meta Pixel (Facebook)

**Configuração:**
1. Adicionar ID no `.env`: `PUBLIC_FB_PIXEL_ID=123456789012345`
2. Script carregado dinamicamente APENAS se `marketing: true`
3. PageView trackado automaticamente

**Código de carregamento:**
```javascript
function enableMarketing() {
  const pixelId = document.documentElement.dataset.fbPixelId;
  if (!pixelId) return;

  if (window.__fb_loaded) return;
  window.__fb_loaded = true;

  !(function(f,b,e,v,n,t,s){
    if(f.fbq)return; n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
    n.queue=[]; t=b.createElement(e); t.async=!0;
    t.src=v; s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}
```

### Adicionar Outros Trackers

**Ouça o evento customizado:**
```javascript
window.addEventListener("lgpd:consent", (e) => {
  const consent = e.detail;
  
  if (consent.analytics) {
    // Carregar Hotjar, Mixpanel, etc.
  }
  
  if (consent.marketing) {
    // Carregar LinkedIn Insight, TikTok Pixel, etc.
  }
});
```

---

## 🎨 Personalização e Estilo

### Cores

**Atual (dark theme):**
```css
--banner-bg: #0f172a;
--modal-bg: #0b1220;
--primary: #22c55e;
--text: #fff;
--border: rgba(255,255,255,.12);
```

**Para light theme:**
```css
--banner-bg: #ffffff;
--modal-bg: #f9fafb;
--primary: #4f46e5;
--text: #1f2937;
--border: rgba(0,0,0,.12);
```

### Posicionamento

**Atual:** Bottom banner (fixo embaixo)

**Alternativas:**
```css
/* Top banner */
.lgpd-banner {
  top: 16px;
  bottom: auto;
}

/* Center modal */
.lgpd-banner {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: auto;
}
```

### Animações

**Adicionar fade-in suave:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lgpd-banner {
  animation: fadeInUp 0.3s ease-out;
}
```

### Responsividade

**Mobile (<640px):**
```css
@media (max-width: 640px) {
  .lgpd-banner {
    left: 8px;
    right: 8px;
    bottom: 8px;
  }
  
  .lgpd-row {
    flex-direction: column;
  }
  
  .lgpd-actions {
    width: 100%;
  }
  
  .btn {
    flex: 1;
  }
}
```

---

## 🔌 API JavaScript

### Métodos Disponíveis

#### `window.__lgpd.open()`
Abre o modal de preferências.

**Exemplo:**
```html
<a href="#" onclick="window.__lgpd.open(); return false;">
  Gerenciar Cookies
</a>
```

#### `window.__lgpd.get()`
Retorna o objeto de consentimento atual.

**Exemplo:**
```javascript
const consent = window.__lgpd.get();
if (consent?.analytics) {
  console.log("Analytics habilitado");
}
```

### Evento Customizado

#### `lgpd:consent`
Disparado sempre que o usuário salva/altera preferências.

**Exemplo:**
```javascript
window.addEventListener("lgpd:consent", (event) => {
  const consent = event.detail;
  console.log("Novo consentimento:", consent);
  
  // Integrar com outros sistemas
  if (consent.analytics) {
    // Iniciar Hotjar, etc.
  }
});
```

---

## 🚀 Guia de Implementação em Outro Site

### Passo 1: Copiar o Componente

Copie o arquivo completo:
```
src/components/LgpdConsent.astro → [seu-projeto]/components/LgpdConsent.astro
```

### Passo 2: Ajustar URLs das Políticas

No início do componente, ajuste os links:
```astro
---
const POLICY_URL = "/sua-politica-privacidade";
const COOKIES_URL = "/sua-politica-cookies";
---
```

### Passo 3: Incluir no Layout

No seu layout principal (ex: `BaseLayout.astro`):
```astro
---
import LgpdConsent from '../components/LgpdConsent.astro';
---

<html>
  <body>
    <!-- Seu conteúdo -->
    
    <LgpdConsent />  <!-- Adicione antes do </body> -->
  </body>
</html>
```

### Passo 4: Configurar data-attributes no HTML

No seu `Layout.astro` ou equivalente:
```astro
---
const GA_ID = import.meta.env.PUBLIC_GA_ID;
const FB_PIXEL_ID = import.meta.env.PUBLIC_FB_PIXEL_ID;
---

<html lang="pt-BR" data-ga-id={GA_ID} data-fb-pixel-id={FB_PIXEL_ID}>
  <!-- ... -->
</html>
```

### Passo 5: Criar arquivo .env

Crie `.env` na raiz do projeto:
```env
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_FB_PIXEL_ID=123456789012345
```

### Passo 6: Criar Páginas de Políticas

Crie as páginas:
- `src/pages/privacidade.astro`
- `src/pages/cookies.astro`

**Template básico:**
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Política de Privacidade" description="...">
  <div class="container mx-auto px-6 py-20">
    <h1>Política de Privacidade</h1>
    <!-- Seu conteúdo -->
  </div>
</BaseLayout>
```

### Passo 7: Personalizar Estilos (Opcional)

Ajuste as cores, fontes e espaçamentos conforme sua identidade visual:

```astro
<style>
  .lgpd-banner {
    background: #sua-cor-primary;
    /* ... outros ajustes */
  }
</style>
```

### Passo 8: Adicionar Link no Footer

No seu `Footer.astro`:
```astro
<footer>
  <!-- ... -->
  <a href="#" onclick="window.__lgpd.open(); return false;">
    Gerenciar Cookies
  </a>
  <!-- ... -->
</footer>
```

### Passo 9: Testar

1. Limpe localStorage: `localStorage.clear()`
2. Recarregue a página
3. Verifique se o banner aparece
4. Teste todos os botões (Aceitar, Rejeitar, Personalizar)
5. Verifique no DevTools → Application → localStorage se o consentimento foi salvo
6. Verifique no DevTools → Network se scripts do GA/Pixel só carregam com consentimento

---

## 📋 Checklist de Implementação

- [ ] Componente `LgpdConsent.astro` copiado
- [ ] Links das políticas atualizados
- [ ] Componente incluído no layout
- [ ] `data-attributes` configurados no `<html>`
- [ ] Arquivo `.env` criado com IDs
- [ ] Página `/privacidade` criada
- [ ] Página `/cookies` criada
- [ ] Link "Gerenciar Cookies" adicionado no footer
- [ ] Estilos personalizados (se necessário)
- [ ] Testes realizados (banner, modal, consentimento)
- [ ] Scripts GA/Pixel só carregam com consentimento ✓
- [ ] localStorage salvando corretamente ✓
- [ ] Responsivo em mobile ✓

---

## 🔍 Debugging

### Banner não aparece

**Verifique:**
1. localStorage está vazio? `localStorage.getItem("predlead_lgpd_consent_v1")`
2. Script `is:inline` foi carregado?
3. Console tem erros de JavaScript?

**Solução:**
```javascript
// No console do navegador
localStorage.removeItem("predlead_lgpd_consent_v1");
location.reload();
```

### Google Analytics não carrega

**Verifique:**
1. `PUBLIC_GA_ID` está definido no `.env`?
2. ID está chegando no `data-ga-id` do `<html>`?
3. Consentimento de analytics está `true`?

**Debug:**
```javascript
// No console
console.log(document.documentElement.dataset.gaId); // deve mostrar G-XXXXXXXXXX
console.log(window.__lgpd.get()); // deve ter analytics: true
```

### Meta Pixel não carrega

**Verifique:**
1. `PUBLIC_FB_PIXEL_ID` está definido no `.env`?
2. ID está chegando no `data-fb-pixel-id` do `<html>`?
3. Consentimento de marketing está `true`?

**Debug:**
```javascript
// No console
console.log(document.documentElement.dataset.fbPixelId); // deve mostrar o ID
console.log(window.__lgpd.get()); // deve ter marketing: true
console.log(window.fbq); // deve ser uma function
```

---

## 📚 Referências e Compliance

### LGPD (Brasil)
- Lei nº 13.709/2018
- Art. 7º, I - consentimento pelo titular
- Art. 8º - consentimento por escrito ou meio que demonstre manifestação de vontade
- Art. 9º - consentimento específico e destacado

### Boas Práticas
- ✅ Consentimento granular (por categoria)
- ✅ Opção de rejeitar todos
- ✅ Fácil retirada de consentimento
- ✅ Armazenamento versionado (permite migração)
- ✅ Timestamp do consentimento
- ✅ Links para políticas visíveis

### Inspirações
- [Cookie Consent by Osano](https://www.osano.com/cookieconsent)
- [Cookiebot](https://www.cookiebot.com/)
- [OneTrust](https://www.onetrust.com/)

---

## 🤝 Suporte

Para dúvidas ou problemas com a implementação:

**Email:** contato@pixel8.com.br  
**Site:** [www.predlead.com](https://www.predlead.com)

---

## 📝 Notas Finais

### Vantagens desta Implementação

✅ **Zero dependências** - apenas HTML/CSS/JS vanilla  
✅ **Lightweight** - ~3KB minificado  
✅ **Rápido** - sem latência de CDN  
✅ **Personalizável** - código 100% sob seu controle  
✅ **Astro-friendly** - usa `is:inline` para garantir execução imediata  
✅ **Compatível** - funciona em todos os navegadores modernos  
✅ **Acessível** - ARIA labels e semântica HTML  

### Melhorias Futuras (Opcional)

- [ ] Analytics de consentimento (quantos aceitam/rejeitam)
- [ ] A/B testing de copy do banner
- [ ] Suporte a mais categorias (functional, performance)
- [ ] Integração com CMP (Consent Management Platform)
- [ ] Suporte a multi-idiomas
- [ ] Tema claro/escuro automático
- [ ] Animações mais elaboradas

---

**Documentação criada em:** Fevereiro de 2026  
**Versão do documento:** 1.0  
**Licença:** MIT (adaptável conforme necessidade)

---

_Esta documentação cobre 100% da implementação atual. Use-a como referência completa para replicar o sistema em outros projetos._
