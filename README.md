# PhishTrainer

Módulo de treinamento interativo para reconhecimento de phishing e comportamento seguro online. Funciona como página estática — sem backend, sem dependências, sem instalação.

**Demo:** (adicione o link do GitHub Pages aqui)

---

## O que é

10 cenários baseados em técnicas reais usadas em ataques de phishing. A ferramenta mistura dois formatos:

- **Identificação** — você analisa um e-mail ou URL falsa e aponta o principal indicador de phishing
- **Simulação** — você recebe uma situação do cotidiano e decide como agir

Cada resposta tem feedback detalhado explicando o raciocínio correto. No final, você recebe um score com nível de consciência e a lista do que errou com as explicações.

---

## Técnicas cobertas

- Subdomínios usados para imitar domínios legítimos
- TLDs abusados (.tk, .xyz, .info, .net)
- Encurtadores de URL ocultando destino real
- URLs com endereço IP no lugar de domínio
- Remetente falsificado vs. domínio real do link
- CEO fraud via WhatsApp
- Arquivos com extensão dupla (.pdf.exe)
- Scareware e golpes de suporte técnico falso
- Evil Twin em redes Wi-Fi públicas
- Reutilização de senhas e credential stuffing

---

## Como usar

Abra o `index.html` diretamente no navegador ou hospede no GitHub Pages.

---

## Estrutura

```
phishtrainer/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

---

## Como hospedar no GitHub Pages

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/phishtrainer.git
git push -u origin main
```

No GitHub, vá em **Settings > Pages**, selecione a branch `main` e a pasta raiz.

---

## Aviso

Projeto educacional para fins de portfólio e treinamento de conscientização em segurança.
