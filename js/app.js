const QUESTIONS = [
  {
    type: 'quiz',
    title: 'Analise o e-mail abaixo. Qual é o principal indicador de phishing?',
    content: {
      kind: 'email',
      from: 'seguranca@bradesco-suporte.com.br',
      to: 'voce@email.com',
      subject: 'URGENTE: Sua conta foi acessada de outro dispositivo',
      body: `Prezado cliente,<br><br>
Identificamos um <strong>acesso suspeito</strong> à sua conta Bradesco originado de São Paulo - SP.<br><br>
Para garantir a segurança dos seus dados, <strong>clique no link abaixo em até 2 horas</strong> ou sua conta será bloqueada automaticamente.<br><br>
<a class="em-link">https://bradesco.com.conta-segura.tk/verificar</a>`
    },
    options: [
      'O e-mail usa linguagem formal demais',
      'O domínio do remetente é bradesco-suporte.com.br, não bradesco.com.br',
      'O link usa o TLD .tk e um domínio intermediário suspeito',
      'O e-mail menciona São Paulo'
    ],
    correct: 2,
    explanation: 'O link <strong>bradesco.com.conta-segura.tk</strong> é o maior alerta. O domínio real aqui é <strong>conta-segura.tk</strong> — o "bradesco.com" é apenas um subdomínio. O TLD .tk é amplamente usado em domínios maliciosos por ser gratuito. O domínio do remetente também é suspeito, mas o link é o indicador mais crítico.'
  },
  {
    type: 'quiz',
    title: 'Qual dessas URLs é legítima para acessar sua conta no Mercado Livre?',
    content: {
      kind: 'url-list',
      urls: [
        { url: 'http://mercadolivre.com.login-seguro.xyz/conta', lock: false },
        { url: 'https://www.mercadolivre.com.br/conta', lock: true },
        { url: 'https://mercadolivre.com.br.verificacao.net/acesso', lock: true },
        { url: 'https://mercado-livre.com/entrar', lock: true }
      ]
    },
    options: [
      'http://mercadolivre.com.login-seguro.xyz/conta',
      'https://www.mercadolivre.com.br/conta',
      'https://mercadolivre.com.br.verificacao.net/acesso',
      'https://mercado-livre.com/entrar'
    ],
    correct: 1,
    explanation: 'Só a opção B é o domínio oficial. A opção A não tem HTTPS e usa TLD .xyz. A opção C parece legítima mas o domínio real é <strong>verificacao.net</strong> — o "mercadolivre.com.br" é subdomínio. A opção D usa hífen no nome da marca, que não é o domínio registrado.'
  },
  {
    type: 'quiz',
    title: 'Você recebe esse e-mail. O que você faz?',
    content: {
      kind: 'email',
      from: 'noreply@receita.federal.gov.br.documentos-fiscais.com',
      to: 'voce@email.com',
      subject: 'Restituição do IR disponível — resgate em 48h',
      body: `Contribuinte,<br><br>
Sua restituição do Imposto de Renda no valor de <strong>R$ 1.847,00</strong> está disponível para resgate.<br><br>
Prazo: <strong>48 horas</strong>. Após esse período o valor retorna ao Tesouro Nacional.<br><br>
Informe seus dados bancários para receber: <a class="em-link">bit.ly/restituicao-ir-2024</a>`
    },
    options: [
      'Clico no link para não perder o prazo',
      'Encaminho para meu contador confirmar',
      'Ignoro — a Receita Federal não envia links de encurtador nem pede dados bancários por e-mail',
      'Acesso o site da Receita Federal separadamente para checar'
    ],
    correct: 2,
    explanation: 'Duas respostas são defensivas (C e D), mas C é a mais precisa: a Receita Federal nunca envia links encurtados nem solicita dados bancários por e-mail. O domínio do remetente é falso — <strong>documentos-fiscais.com</strong> é o domínio real, não gov.br. D também é uma boa prática, mas pressupõe que a restituição existe de verdade.'
  },
  {
    type: 'sim',
    title: 'Situação: seu chefe manda mensagem no WhatsApp',
    content: {
      kind: 'scenario',
      text: `<strong>Mensagem recebida (número desconhecido):</strong><br><br>
"Oi, tô em reunião e não posso ligar. Preciso que você compre 3 cartões presente Amazon de R$500 cada e me mande os códigos por aqui. Urgente, preciso presentear um cliente. Reembolso no final do dia. — [Nome do seu chefe]"`
    },
    options: [
      'Compro logo para não atrasar — meu chefe nunca me pediu isso antes mas parece urgente',
      'Mando mensagem perguntando a conta bancária para depositar o reembolso primeiro',
      'Ligo diretamente para o número já conhecido do meu chefe para confirmar o pedido',
      'Peço para ele me mandar o pedido por e-mail corporativo'
    ],
    correct: 2,
    explanation: 'Isso é um golpe clássico de <strong>CEO fraud / BEC (Business Email Compromise)</strong> adaptado para WhatsApp. O número é desconhecido. A urgência e o pedido de cartões presente são marcas registradas desse golpe. A única ação correta é <strong>ligar para o número que você já tem</strong> do seu chefe — nunca responder pelo mesmo canal suspeito.'
  },
  {
    type: 'quiz',
    title: 'Qual elemento desse e-mail é o indicador mais forte de phishing?',
    content: {
      kind: 'email',
      from: 'atendimento@nubank.com',
      to: 'voce@email.com',
      subject: 'Seu limite foi bloqueado — regularize agora',
      body: `Olá,<br><br>
Identificamos uma <span class="highlight-bad">irregularidade no seu CPF</span> vinculado à sua conta Nubank.<br><br>
Para desbloquear seu limite, acesse o aplicativo ou clique abaixo:<br><br>
<a class="em-link">https://nubank.com.br.acesso-cliente.info/regularizar</a><br><br>
<span class="highlight-warn">Caso não regularize em 24h, seu cartão será cancelado.</span>`
    },
    options: [
      'A menção ao CPF no corpo do e-mail',
      'O prazo de 24 horas para regularizar',
      'A URL aponta para acesso-cliente.info, não para nubank.com.br',
      'O remetente usa atendimento@nubank.com'
    ],
    correct: 2,
    explanation: 'A URL é o indicador definitivo. Em <strong>nubank.com.br.acesso-cliente.info</strong>, o domínio real é <strong>acesso-cliente.info</strong> — o "nubank.com.br" é apenas um subdomínio. O remetente parece legítimo (e pode ser falsificado via spoofing), a urgência é suspeita mas não conclusiva. A URL nunca mente sobre quem controla o servidor.'
  },
  {
    type: 'quiz',
    title: 'Você está num café e a rede Wi-Fi disponível é "Starbucks_Free_WiFi". O que considerar antes de conectar?',
    content: {
      kind: 'scenario',
      text: `Você precisa checar seu e-mail de trabalho. Seu 4G está fraco. A rede <strong>"Starbucks_Free_WiFi"</strong> aparece com sinal forte, sem senha. O estabelecimento não tem nenhum cartaz informando o nome da rede oficial.`
    },
    options: [
      'Conecto e uso normalmente — é um lugar público conhecido',
      'Conecto mas evito acessar bancos ou e-mail corporativo',
      'Conecto somente se o site usar HTTPS',
      'Não conecto — pode ser um Evil Twin. Uso o 4G mesmo com sinal fraco ou peço ao estabelecimento o nome oficial da rede'
    ],
    correct: 3,
    explanation: 'Redes abertas sem confirmação do estabelecimento são vetores comuns de ataque <strong>Evil Twin</strong> — um atacante cria uma rede com nome convincente para interceptar tráfego. HTTPS ajuda mas não protege contra todos os ataques em redes comprometidas. A ação mais segura é confirmar o nome real da rede com um funcionário ou usar dados móveis.'
  },
  {
    type: 'quiz',
    title: 'Qual dessas práticas NÃO ajuda a se proteger contra phishing?',
    content: {
      kind: 'scenario',
      text: 'Marque a opção que <strong>não é</strong> uma medida de proteção eficaz contra ataques de phishing.'
    },
    options: [
      'Ativar autenticação de dois fatores em contas importantes',
      'Verificar o domínio real da URL antes de inserir credenciais',
      'Usar a mesma senha forte em todos os sites para não esquecer',
      'Desconfiar de e-mails com urgência extrema e links encurtados'
    ],
    correct: 2,
    explanation: 'Reutilizar senhas é perigoso mesmo que sejam fortes — se um site vazar, todas as suas contas ficam comprometidas. Isso é chamado de <strong>credential stuffing</strong>. Use um gerenciador de senhas (Bitwarden, KeePass) para ter senhas únicas em cada serviço.'
  },
  {
    type: 'sim',
    title: 'Situação: você recebe um PDF por e-mail de um "parceiro"',
    content: {
      kind: 'scenario',
      text: `Um e-mail de <strong>contato@fornecedor-logistica.com</strong> chega com assunto "Proposta comercial atualizada". O PDF em anexo se chama <strong>proposta_final.pdf.exe</strong>.<br><br>
O e-mail diz que a proposta expira hoje e pede que você abra o arquivo e preencha os dados da sua empresa.`
    },
    options: [
      'Abro o arquivo — parece ser de um parceiro real e a proposta é urgente',
      'Abro mas só depois de passar no antivírus',
      'Não abro. O arquivo tem extensão .exe disfarçado de PDF — é malware. Entro em contato com o fornecedor por outro canal para confirmar',
      'Encaminho para o TI antes de abrir'
    ],
    correct: 2,
    explanation: '<strong>proposta_final.pdf.exe</strong> é um executável, não um PDF. O Windows por padrão oculta extensões conhecidas, então alguns usuários veriam apenas "proposta_final.pdf". Abrir esse arquivo instala malware. Antivírus não é garantia — amostras novas passam. A ação correta é não abrir e confirmar por outro canal (telefone, outro e-mail).'
  },
  {
    type: 'quiz',
    title: 'Analise a URL abaixo. O que torna ela suspeita?',
    content: {
      kind: 'url',
      url: 'http://192.168.15.43/itau/login/verificar-conta',
      lock: false
    },
    options: [
      'O path contém a palavra "verificar"',
      'A URL usa HTTP sem HTTPS',
      'Um banco legítimo nunca usaria endereço IP no lugar de domínio',
      'B e C — sem HTTPS e IP no lugar de domínio são dois indicadores graves'
    ],
    correct: 3,
    explanation: 'Dois indicadores críticos combinados: sem HTTPS (tráfego sem criptografia) e <strong>endereço IP no lugar de domínio</strong>. Sites legítimos de bancos sempre usam domínios registrados com certificado SSL válido. Um IP no lugar de domínio indica que o servidor não tem identidade verificada por uma autoridade certificadora.'
  },
  {
    type: 'sim',
    title: 'Situação: pop-up aparece enquanto você navega',
    content: {
      kind: 'scenario',
      text: `Você está navegando normalmente quando aparece uma janela de pop-up com o seguinte texto:<br><br>
<strong>"AVISO DE SEGURANÇA: Vírus detectado no seu computador! Ligue agora para o suporte Microsoft: 0800-XXX-XXXX para remover a ameaça antes que seus arquivos sejam deletados."</strong><br><br>
A página toca um som de alerta repetidamente e parece travar o navegador.`
    },
    options: [
      'Ligo para o número informado — pode ser urgente',
      'Clico em OK no pop-up para fechar e ver o que acontece',
      'Fecho o navegador pelo gerenciador de tarefas (Ctrl+Shift+Esc) e não ligo para número nenhum',
      'Instalo um antivírus indicado na própria janela para remover a ameaça'
    ],
    correct: 2,
    explanation: 'Isso é <strong>scareware / tech support scam</strong>. A Microsoft (e nenhuma empresa de tecnologia) detecta vírus no seu computador e exibe número de telefone via navegador. O pop-up é uma página web normal — não tem acesso ao seu sistema. Fechar pelo gerenciador de tarefas evita clicar em qualquer coisa da página. Ligar para o número coloca você em contato com golpistas.'
  }
];

let currentQ = 0;
let score = 0;
let answers = [];

function startTraining() {
  currentQ = 0; score = 0; answers = [];
  // embaralha as perguntas a cada rodada
  QUESTIONS.sort(() => Math.random() - 0.5);
  showScreen('screenQuestion');
  document.getElementById('progressWrap').style.display = 'block';
  renderQuestion();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const total = QUESTIONS.length;

  document.getElementById('progressLabel').textContent = `${currentQ + 1} / ${total}`;
  document.getElementById('progressFill').style.width = `${(currentQ / total) * 100}%`;

  const tag = document.getElementById('qTag');
  tag.textContent = q.type === 'quiz' ? 'IDENTIFICAÇÃO' : 'SIMULAÇÃO';
  tag.className = 'q-tag ' + (q.type === 'quiz' ? 'quiz' : 'sim');

  document.getElementById('qNum').textContent = `QUESTÃO ${currentQ + 1} DE ${total}`;
  document.getElementById('qTitle').textContent = q.title;
  document.getElementById('qContent').innerHTML = renderContent(q.content);

  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('qOptions').innerHTML = q.options.map((opt, i) => `
    <button class="opt-btn" onclick="selectAnswer(${i})">
      <span class="opt-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>
  `).join('');

  const fb = document.getElementById('feedbackBox');
  fb.className = 'feedback-box';
  fb.style.display = 'none';
  document.getElementById('nextBtn').style.display = 'none';
}

function renderContent(c) {
  if (c.kind === 'email') {
    return `<div class="email-mock">
      <div class="em-row"><span class="em-label">De:</span><span class="em-val">${c.from}</span></div>
      <div class="em-row"><span class="em-label">Para:</span><span class="em-val">${c.to}</span></div>
      <div class="em-row"><span class="em-label">Assunto:</span><span class="em-val">${c.subject}</span></div>
      <div class="em-body">${c.body}</div>
    </div>`;
  }
  if (c.kind === 'url') {
    const icon = c.lock ? '🔒' : '⚠️';
    const cls  = c.lock ? 'safe' : 'unsafe';
    return `<div class="url-mock"><span class="url-lock ${cls}">${icon}</span><span>${c.url}</span></div>`;
  }
  if (c.kind === 'url-list') {
    return `<div class="url-mock-wrap">` + c.urls.map(u => {
      const icon = u.lock ? '🔒' : '⚠️';
      const cls  = u.lock ? 'safe' : 'unsafe';
      return `<div class="url-mock"><span class="url-lock ${cls}">${icon}</span><span>${u.url}</span></div>`;
    }).join('') + `</div>`;
  }
  if (c.kind === 'scenario') {
    return `<div class="scenario-box">${c.text}</div>`;
  }
  return '';
}

function selectAnswer(idx) {
  const q = QUESTIONS[currentQ];
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach(b => b.disabled = true);

  const isCorrect = idx === q.correct;
  btns[idx].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) btns[q.correct].classList.add('missed');
  if (isCorrect) score++;

  answers.push({ correct: isCorrect, questionTitle: q.title, explanation: q.explanation });

  const fb = document.getElementById('feedbackBox');
  fb.className = 'feedback-box show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.style.display = 'block';
  document.getElementById('fbTitle').textContent = isCorrect ? 'CORRETO' : 'INCORRETO';
  document.getElementById('fbText').innerHTML = q.explanation;

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.style.display = 'inline-block';
  nextBtn.textContent = currentQ + 1 < QUESTIONS.length ? 'PRÓXIMA' : 'VER RESULTADO';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= QUESTIONS.length) showResult();
  else renderQuestion();
}

function showResult() {
  showScreen('screenResult');
  document.getElementById('progressFill').style.width = '100%';
  document.getElementById('progressLabel').textContent = `${QUESTIONS.length} / ${QUESTIONS.length}`;

  const pct = Math.round((score / QUESTIONS.length) * 100);
  let tier, levelText, desc;

  if (pct >= 80) {
    tier = 'high'; levelText = 'CONSCIÊNCIA ALTA';
    desc = 'Você reconhece a maioria das técnicas comuns de phishing. Continue praticando — novos vetores surgem o tempo todo.';
  } else if (pct >= 50) {
    tier = 'mid'; levelText = 'CONSCIÊNCIA MÉDIA';
    desc = 'Você pega os casos mais óbvios mas ainda pode ser pego em ataques mais elaborados. Revise o que errou.';
  } else {
    tier = 'low'; levelText = 'CONSCIÊNCIA BAIXA';
    desc = 'Você está vulnerável a ataques reais. Leia as explicações de cada questão — elas cobrem os padrões mais usados hoje.';
  }

  document.getElementById('resultNum').textContent = `${score}/${QUESTIONS.length}`;
  document.getElementById('resultNum').className = `result-score-num ${tier}`;

  const lvl = document.getElementById('resultLevel');
  lvl.textContent = levelText;
  lvl.className = `result-level ${tier}`;
  document.getElementById('resultDesc').textContent = desc;

  setTimeout(() => {
    const fill = document.getElementById('resultBarFill');
    fill.className = `result-bar-fill ${tier}`;
    fill.style.width = pct + '%';
  }, 100);

  const wrong = answers.filter(a => !a.correct);
  const reviewEl = document.getElementById('reviewList');

  if (wrong.length === 0) {
    reviewEl.innerHTML = `<div class="review-item r-ok">
      <div class="review-icon">✓</div>
      <div class="review-body">
        <div class="review-q">Parabéns — você acertou tudo.</div>
        <div class="review-explanation">Tente novamente para fixar o conteúdo ou compartilhe com alguém que possa se beneficiar.</div>
      </div>
    </div>`;
    return;
  }

  reviewEl.innerHTML = wrong.map(a => `
    <div class="review-item r-wrong">
      <div class="review-icon">✗</div>
      <div class="review-body">
        <div class="review-q">${a.questionTitle}</div>
        <div class="review-explanation">${a.explanation}</div>
      </div>
    </div>
  `).join('');
}

function restartTraining() {
  showScreen('screenIntro');
  document.getElementById('progressWrap').style.display = 'none';
  document.getElementById('progressFill').style.width = '0%';
}
