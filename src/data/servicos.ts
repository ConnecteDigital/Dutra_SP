import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  categoria: 'Desentupimento' | 'Limpa fossa e limpeza';
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de pia',
    keyword: 'Desentupimento de Pia em São Paulo',
    resumo: 'Pia de cozinha, lavatório e tanque parados por gordura, resto de comida ou sabão.',
    metaDescription:
      'Desentupimento de pia 24h em São Paulo: cozinha, banheiro e tanque. Atendimento a qualquer hora e chegada em até 20 minutos. Chame no WhatsApp.',
    icon: 'sink',
    categoria: 'Desentupimento',
    intro: [
      'Pia de cozinha entupida quase sempre é gordura. Ela desce líquida junto com a água quente, esfria dentro do cano e vai grudando na parede da tubulação até fechar a passagem. No lavatório do banheiro o vilão costuma ser cabelo misturado com sabonete e creme dental.',
      'A Desentupidora Dutra SP atende casas, apartamentos, restaurantes e comércios em toda a capital. Trabalhamos com máquina de cabo flexível, que entra pelo próprio ralo ou pelo sifão e limpa o cano por dentro, até a água voltar a escoar normalmente.',
    ],
    sinais: [
      'Água demorando para descer ou parada na cuba',
      'Mau cheiro subindo pelo ralo da pia',
      'Barulho de borbulha quando a água escoa',
      'Água da pia voltando pelo ralo do chão ou pelo tanque',
      'Soda cáustica e desentupidor de borracha já não resolvem',
    ],
    comoFazemos: [
      'Verificamos se o entupimento está no sifão, no cano da parede ou na caixa de gordura',
      'Passamos a máquina de cabo flexível no trecho obstruído',
      'Testamos o escoamento com a torneira aberta por alguns minutos',
      'Mostramos o que causou o entupimento e como evitar que volte',
    ],
    faq: [
      {
        q: 'Posso usar soda cáustica na pia entupida?',
        a: 'Não recomendamos. A soda esquenta, pode deformar cano de PVC, estragar o sifão e ainda causar queimadura em quem for mexer depois. Em entupimento por gordura ela costuma só abrir um furo pequeno, que fecha de novo em poucos dias.',
      },
      {
        q: 'Vocês atendem restaurante e lanchonete?',
        a: 'Sim. Atendemos cozinhas comerciais a qualquer hora, inclusive de madrugada, para não parar o funcionamento.',
      },
      {
        q: 'Precisa quebrar a parede para desentupir a pia?',
        a: 'Na grande maioria dos casos, não. O cabo da máquina entra pela própria tubulação. Só falamos em abrir quando o cano está quebrado, e isso é combinado com você antes.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de ralo',
    keyword: 'Desentupimento de Ralo em São Paulo',
    resumo: 'Ralo de banheiro, box, lavanderia, quintal e garagem escoando devagar ou devolvendo água.',
    metaDescription:
      'Desentupimento de ralo 24 horas em São Paulo: banheiro, box, lavanderia, quintal e garagem. Chegamos em até 20 minutos. Fale no WhatsApp.',
    icon: 'drain',
    categoria: 'Desentupimento',
    intro: [
      'Ralo entupido começa com uma poça no box que demora para sumir e termina com água suja voltando pelo chão. Cabelo, sabonete, areia e pequenos objetos formam um tampão dentro da caixa sifonada ou no cano que sai dela.',
      'Atendemos ralos internos e externos em São Paulo: box, banheiro, área de serviço, quintal, garagem e ralos de água de chuva. Abrimos a caixa sifonada, retiramos o que está preso e limpamos a tubulação até a ligação com o esgoto.',
    ],
    sinais: [
      'Água acumulando no box durante o banho',
      'Cheiro de esgoto no banheiro ou na lavanderia',
      'Água suja voltando pelo ralo quando a máquina de lavar esvazia',
      'Ralo do quintal alagando em dia de chuva',
      'Insetos saindo pelo ralo',
    ],
    comoFazemos: [
      'Abrimos a grelha e a caixa sifonada para ver onde está a obstrução',
      'Retiramos o material acumulado e passamos o cabo da máquina na tubulação',
      'Lavamos o trecho com água corrente e conferimos o escoamento',
      'Recolocamos a grelha e deixamos o local limpo',
    ],
    faq: [
      {
        q: 'O ralo do banheiro volta água quando dou descarga. O que é?',
        a: 'Normalmente o entupimento está depois do ralo, no ramal de esgoto que recebe também o vaso. Nesse caso desentupimos o ramal, e não só o ralo.',
      },
      {
        q: 'Desentopem ralo de água de chuva?',
        a: 'Sim. Folhas, terra e areia entopem ralos de quintal, laje e garagem. Fazemos a limpeza com máquina e, quando o trecho é longo, com hidrojateamento.',
      },
      {
        q: 'Atendem em apartamento?',
        a: 'Sim. Atendemos apartamentos em todas as zonas de São Paulo, 24 horas por dia.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de vaso sanitário',
    keyword: 'Desentupimento de Vaso Sanitário em São Paulo',
    resumo: 'Vaso que não dá descarga, enche até a borda ou transborda. Atendimento imediato.',
    metaDescription:
      'Desentupimento de vaso sanitário 24h em São Paulo. Vaso entupido ou transbordando? Chegamos em até 20 minutos, a qualquer hora. Chame no WhatsApp.',
    icon: 'toilet',
    categoria: 'Desentupimento',
    intro: [
      'Vaso sanitário entupido é o tipo de problema que não dá para deixar para depois, ainda mais quando é o único banheiro da casa. Papel em excesso, absorvente, fralda, lenço umedecido, fio dental e brinquedo de criança são as causas que mais encontramos.',
      'Chegamos em até 20 minutos em São Paulo e trabalhamos com equipamento próprio para vaso, que alcança a obstrução pelo sifão da louça sem riscar e, na maior parte das vezes, sem precisar tirar o vaso do lugar.',
    ],
    sinais: [
      'A água sobe até a borda quando você dá descarga',
      'O vaso esvazia muito devagar depois da descarga',
      'A água do vaso borbulha quando alguém usa o chuveiro ou a pia',
      'O vaso transbordou',
      'Mau cheiro forte de esgoto no banheiro',
    ],
    comoFazemos: [
      'Avaliamos se o entupimento está na louça ou no cano de esgoto',
      'Usamos equipamento próprio para vaso, que não danifica a louça',
      'Se a obstrução estiver mais adiante, desentupimos o ramal de esgoto',
      'Testamos com várias descargas antes de encerrar o atendimento',
    ],
    faq: [
      {
        q: 'O que eu faço enquanto a desentupidora não chega?',
        a: 'Não dê descarga de novo, para não transbordar. Feche o registro do vaso (ou da caixa acoplada) e evite jogar produto químico: ele não dissolve objeto preso e ainda pode espirrar durante o desentupimento.',
      },
      {
        q: 'Vai precisar tirar o vaso do lugar?',
        a: 'Na maioria dos atendimentos, não. A retirada só é necessária quando um objeto rígido ficou preso dentro do sifão da louça e não sai pelo equipamento.',
      },
      {
        q: 'Atendem de madrugada e no domingo?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, incluindo fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de cano',
    keyword: 'Desentupimento de Cano em São Paulo',
    resumo: 'Tubulações de esgoto e de água de chuva, prumadas e ramais desobstruídos com máquina.',
    metaDescription:
      'Desentupimento de cano e tubulação 24 horas em São Paulo. Ramais, prumadas e redes de esgoto ou água de chuva. Chegada em até 20 minutos.',
    icon: 'pipe',
    categoria: 'Desentupimento',
    intro: [
      'Quando mais de um ponto da casa começa a escoar mal ao mesmo tempo, o problema já não está no ralo ou na pia: está no cano que recebe todos eles. Gordura endurecida, raiz de árvore, entulho de obra e cano com caimento errado são as causas mais comuns.',
      'A Desentupidora Dutra SP desobstrui tubulações de 40 mm a grandes diâmetros em casas, prédios, comércios e indústrias de São Paulo. Usamos máquinas rotativas com cabos e ponteiras para cada situação e, em redes longas ou muito sujas, hidrojateamento.',
    ],
    sinais: [
      'Vários ralos e pias lentos ao mesmo tempo',
      'Água voltando em um ponto quando outro é usado',
      'Caixa de inspeção cheia ou transbordando',
      'Mancha de umidade seguindo o caminho do cano',
      'Entupimento que volta poucos dias depois de resolvido',
    ],
    comoFazemos: [
      'Localizamos o trecho entupido pelas caixas de inspeção e pontos de acesso',
      'Escolhemos o cabo e a ponteira adequados ao diâmetro e ao material do cano',
      'Desobstruímos e lavamos a tubulação até a água correr livre',
      'Informamos se há indício de cano quebrado ou com caimento errado',
    ],
    faq: [
      {
        q: 'Vocês desentopem prumada de prédio?',
        a: 'Sim. Atendemos colunas e prumadas de esgoto e de gordura em edifícios residenciais e comerciais, em contato direto com o zelador ou a administradora.',
      },
      {
        q: 'Raiz dentro do cano tem solução?',
        a: 'Sim. Usamos ponteiras cortantes na máquina rotativa e hidrojateamento para remover as raízes. Se o cano estiver trincado, a raiz volta com o tempo, então avisamos quando o reparo da tubulação é o mais indicado.',
      },
      {
        q: 'Qual o tamanho de cano que vocês atendem?',
        a: 'Do cano fino de pia até redes de esgoto de grande diâmetro em condomínios e indústrias.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de esgoto',
    keyword: 'Desentupimento de Esgoto em São Paulo',
    resumo: 'Rede de esgoto entupida, caixa de inspeção transbordando e esgoto voltando para dentro do imóvel.',
    metaDescription:
      'Desentupimento de esgoto 24h em São Paulo para casas, condomínios e empresas. Esgoto voltando ou caixa transbordando? Chegamos em até 20 minutos.',
    icon: 'sewer',
    categoria: 'Desentupimento',
    intro: [
      'Esgoto entupido é urgência: o retorno costuma aparecer primeiro nos pontos mais baixos do imóvel, como ralo de garagem, banheiro do térreo e caixa de inspeção do quintal. Além do mau cheiro, há risco de contaminação.',
      'Atendemos redes de esgoto de casas, sobrados, condomínios, comércios e galpões em São Paulo. Trabalhamos da caixa de inspeção até a ligação com a rede da rua, com máquina rotativa de grande porte e hidrojateamento quando a rede pede uma limpeza completa.',
    ],
    sinais: [
      'Esgoto voltando pelo ralo ou pelo vaso do andar de baixo',
      'Caixa de inspeção ou de passagem cheia',
      'Cheiro forte de esgoto no quintal ou na garagem',
      'Todos os pontos da casa escoando mal',
      'Água suja minando pela tampa da caixa na calçada',
    ],
    comoFazemos: [
      'Abrimos as caixas de inspeção para identificar em que trecho a rede parou',
      'Desobstruímos com máquina rotativa ou hidrojateamento, conforme o caso',
      'Limpamos as caixas e conferimos o fluxo até a saída para a rua',
      'Avisamos se o problema estiver na rede pública, que é responsabilidade da Sabesp',
    ],
    faq: [
      {
        q: 'Como sei se o entupimento é meu ou da rua?',
        a: 'Abrimos a última caixa de inspeção do imóvel. Se ela estiver vazia e o esgoto não chega até ali, o entupimento é interno. Se estiver cheia e sem saída, pode ser a ligação com a rua, e nesse caso orientamos você sobre como acionar a Sabesp.',
      },
      {
        q: 'Atendem condomínios e empresas?',
        a: 'Sim. Atendemos condomínios residenciais, prédios comerciais, restaurantes, escolas e indústrias, em qualquer horário.',
      },
      {
        q: 'Fazem limpeza preventiva da rede de esgoto?',
        a: 'Sim. A limpeza periódica com hidrojateamento é indicada para condomínios e cozinhas comerciais, para evitar entupimentos de emergência.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-conduite',
    nome: 'Desentupimento de conduíte',
    keyword: 'Desentupimento de Conduíte em São Paulo',
    resumo: 'Conduítes obstruídos por massa, entulho ou amassamento liberados para a passagem de fios e cabos.',
    metaDescription:
      'Desentupimento de conduíte em São Paulo: eletrodutos obstruídos por massa, entulho ou amassados. Atendimento 24 horas para obras, casas e empresas.',
    icon: 'cable',
    categoria: 'Desentupimento',
    intro: [
      'Conduíte entupido trava a obra: o eletricista não consegue passar o fio, o cabo de internet não chega ao ponto e o ar-condicionado fica sem alimentação. As causas mais comuns são massa de reboco ou concreto que entrou durante a obra, entulho, conduíte amassado e curvas muito fechadas.',
      'Fazemos a desobstrução de conduítes e eletrodutos em casas, apartamentos, lojas e obras de São Paulo, liberando a passagem para fiação elétrica, cabos de rede, telefonia, interfone e câmeras.',
    ],
    sinais: [
      'O passa-fio (guia) trava sempre no mesmo ponto',
      'Não é possível passar fio novo ou trocar a fiação antiga',
      'Obra recém-entregue com tubulação seca obstruída',
      'Conduíte de piso ou de laje cheio de massa',
      'Necessidade de passar cabo de internet, TV ou câmera por tubulação existente',
    ],
    comoFazemos: [
      'Identificamos o ponto da obstrução entre as caixas de passagem',
      'Usamos equipamento específico para tubulação seca, de pequeno diâmetro',
      'Desobstruímos o trecho e conferimos a passagem com a guia',
      'Quando solicitado, deixamos a guia passada para o eletricista',
    ],
    faq: [
      {
        q: 'Precisa quebrar a parede para desentupir o conduíte?',
        a: 'Na maioria das vezes, não: o trabalho é feito pelas caixas de passagem. Quando o conduíte está esmagado ou rompido dentro da parede, avisamos antes qual é o ponto exato que precisa ser aberto.',
      },
      {
        q: 'Vocês passam os fios também?',
        a: 'Nosso serviço é a desobstrução do conduíte. A passagem e a ligação dos fios ficam com o seu eletricista.',
      },
      {
        q: 'Atendem construtoras e obras?',
        a: 'Sim. Atendemos obras residenciais e comerciais, com vários pontos no mesmo chamado.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-agua-limpa',
    nome: 'Desentupimento de água limpa',
    keyword: 'Desentupimento de Tubulação de Água Limpa em São Paulo',
    resumo: 'Canos de água potável com pouca pressão ou sem vazão por ferrugem, areia e incrustação.',
    metaDescription:
      'Desentupimento de tubulação de água limpa em São Paulo. Torneira ou chuveiro com pouca água? Desobstrução de canos de água, 24h, chegada em 20 minutos.',
    icon: 'drop',
    categoria: 'Desentupimento',
    intro: [
      'Nem todo entupimento é de esgoto. A tubulação de água limpa, que leva água da rua ou da caixa até torneiras e chuveiros, também entope: ferrugem em cano de ferro antigo, areia, incrustação de calcário, resto de fita veda-rosca e sujeira que desce da caixa d’água vão fechando a passagem.',
      'O resultado é torneira que sai um fio de água, chuveiro que não esquenta por falta de vazão e caixa que demora horas para encher. Fazemos a desobstrução da rede de água de casas, apartamentos e comércios em São Paulo.',
    ],
    sinais: [
      'Pouca pressão em uma torneira ou em um cômodo inteiro',
      'Chuveiro com pouca água mesmo com o registro todo aberto',
      'Caixa d’água que demora para encher',
      'Água saindo com ferrugem ou areia',
      'Vazão que foi diminuindo aos poucos, ao longo de meses',
    ],
    comoFazemos: [
      'Verificamos em que trecho a vazão cai: cavalete, entrada, barrilete ou ramal',
      'Desobstruímos a tubulação com equipamento próprio para água limpa',
      'Lavamos a rede e limpamos os arejadores das torneiras',
      'Testamos a vazão em todos os pontos atendidos',
    ],
    faq: [
      {
        q: 'Como sei se é entupimento ou falta de água na rua?',
        a: 'Se a água chega normalmente no cavalete (na torneira do relógio) e não chega com força dentro de casa, o problema está na sua tubulação.',
      },
      {
        q: 'Cano de ferro antigo tem jeito?',
        a: 'A desobstrução recupera a vazão, mas em cano de ferro muito corroído a ferrugem volta a se formar. Quando é esse o caso, explicamos a situação para você decidir.',
      },
      {
        q: 'A água pode ser usada logo depois do serviço?',
        a: 'Sim. Ao final, deixamos a água correr para lavar a tubulação e ela já pode ser usada normalmente.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    keyword: 'Hidrojateamento em São Paulo',
    resumo: 'Jato de água em alta pressão para limpar e desobstruir tubulações, redes de esgoto e galerias.',
    metaDescription:
      'Hidrojateamento em São Paulo: limpeza e desobstrução de tubulações, redes de esgoto e galerias com jato de alta pressão. Atendimento 24 horas.',
    icon: 'jet',
    categoria: 'Limpa fossa e limpeza',
    intro: [
      'O hidrojateamento usa água em altíssima pressão, levada por uma mangueira com bico especial que avança por dentro da tubulação. O jato corta gordura endurecida, remove areia, lodo e raízes e lava a parede do cano por inteiro, e não só o miolo.',
      'É o serviço indicado para redes longas, tubulações de grande diâmetro e entupimentos que sempre voltam. Atendemos condomínios, restaurantes, indústrias, hospitais, escolas e residências em São Paulo, tanto em emergências quanto em limpezas preventivas programadas.',
    ],
    sinais: [
      'Entupimentos que voltam em pouco tempo',
      'Rede de esgoto ou de gordura com muitos anos sem limpeza',
      'Tubulação com gordura endurecida ou raízes',
      'Galerias e redes de água de chuva com areia e lodo',
      'Manutenção preventiva de condomínios e cozinhas industriais',
    ],
    comoFazemos: [
      'Avaliamos a rede, os pontos de acesso e a pressão adequada para o material do cano',
      'Posicionamos o equipamento e introduzimos a mangueira pela caixa de inspeção',
      'Fazemos a passagem do jato em todo o trecho, até a água sair limpa',
      'Quando há muito resíduo, combinamos com a sucção do caminhão limpa fossa',
    ],
    faq: [
      {
        q: 'O hidrojateamento pode estragar o cano?',
        a: 'Não, quando a pressão é regulada conforme o material e o diâmetro da tubulação, o que fazemos antes de começar.',
      },
      {
        q: 'Qual a diferença para o desentupimento comum?',
        a: 'A máquina de cabo abre passagem no meio da obstrução. O hidrojateamento lava a tubulação inteira, removendo o que está grudado na parede do cano. Por isso o resultado costuma durar mais.',
      },
      {
        q: 'De quanto em quanto tempo o condomínio deve fazer?',
        a: 'Depende do uso. Como referência, condomínios costumam programar a limpeza das redes de esgoto e de gordura uma ou duas vezes por ano.',
      },
    ],
  },
  {
    slug: 'limpa-fossa',
    nome: 'Limpa fossa',
    keyword: 'Limpa Fossa em São Paulo',
    resumo: 'Esgotamento de fossa séptica, fossa negra, sumidouro e poço com caminhão a vácuo.',
    metaDescription:
      'Limpa fossa 24 horas em São Paulo: esgotamento de fossa séptica, fossa negra e sumidouro com caminhão a vácuo. Chegamos em até 20 minutos.',
    icon: 'truck',
    categoria: 'Limpa fossa e limpeza',
    intro: [
      'A fossa recebe todo o esgoto do imóvel e, com o tempo, o lodo se acumula no fundo até não caber mais nada. Quando isso acontece, o esgoto começa a voltar para dentro de casa ou a minar no terreno. A solução é o esgotamento com caminhão limpa fossa.',
      'A Desentupidora Dutra SP faz a limpeza de fossa séptica, fossa negra, sumidouro e poços de recalque em casas, chácaras, condomínios, comércios e indústrias de São Paulo. O caminhão a vácuo suga todo o conteúdo por mangote, sem contato com o resíduo e sem sujeira no local.',
    ],
    sinais: [
      'Mau cheiro forte perto da fossa ou nos ralos',
      'Vasos e ralos escoando devagar em toda a casa',
      'Esgoto voltando pelos pontos mais baixos',
      'Terreno encharcado ou afundando sobre a fossa',
      'Fossa há mais de um ano sem limpeza',
    ],
    comoFazemos: [
      'Localizamos e abrimos a tampa da fossa',
      'Posicionamos o caminhão e levamos o mangote até o local',
      'Fazemos a sucção completa do líquido e do lodo',
      'Fechamos a fossa e deixamos a área limpa',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo a fossa deve ser limpa?',
        a: 'Em residências, a referência é uma vez por ano. Imóveis com muitas pessoas, comércios e fossas pequenas podem precisar de limpeza em intervalos menores.',
      },
      {
        q: 'O caminhão precisa entrar no terreno?',
        a: 'Não necessariamente. O mangote alcança a fossa a partir da rua ou da garagem. Informe pelo WhatsApp a distância aproximada para irmos com o equipamento certo.',
      },
      {
        q: 'Atendem emergência de fossa cheia?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de caixa de gordura',
    keyword: 'Limpeza de Caixa de Gordura em São Paulo',
    resumo: 'Sucção e limpeza de caixa de gordura de casas, condomínios, restaurantes e cozinhas industriais.',
    metaDescription:
      'Limpeza de caixa de gordura em São Paulo com caminhão limpa fossa: casas, condomínios e restaurantes. Atendimento 24 horas, chegada em até 20 minutos.',
    icon: 'grease',
    categoria: 'Limpa fossa e limpeza',
    intro: [
      'A caixa de gordura segura a gordura que sai da pia da cozinha antes que ela chegue ao esgoto. Quando fica cheia, a gordura passa direto, entope a tubulação e o cheiro sobe pela pia. Em restaurantes, a limpeza em dia também é exigida pela vigilância sanitária.',
      'Fazemos a limpeza de caixas de gordura de todos os tamanhos em São Paulo. Nas caixas pequenas, de residência, a limpeza é manual. Nas grandes, de condomínios e cozinhas comerciais, usamos o caminhão limpa fossa para sugar todo o conteúdo e o hidrojateamento para lavar a caixa e a tubulação.',
    ],
    sinais: [
      'Cheiro de gordura rançosa na cozinha ou no quintal',
      'Pia da cozinha escoando devagar',
      'Caixa transbordando ou com crosta de gordura na tampa',
      'Baratas e insetos em volta da caixa',
      'Caixa há mais de seis meses sem limpeza',
    ],
    comoFazemos: [
      'Abrimos a caixa e avaliamos o volume de gordura acumulada',
      'Retiramos todo o conteúdo, de forma manual ou com sucção a vácuo',
      'Lavamos as paredes da caixa e desobstruímos a entrada e a saída',
      'Fechamos a caixa e testamos o escoamento da pia',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Em casas, a cada seis meses é uma boa referência. Em restaurantes e cozinhas industriais, o intervalo costuma ser mensal ou até menor, conforme o movimento.',
      },
      {
        q: 'Atendem restaurantes fora do horário de funcionamento?',
        a: 'Sim. Como o atendimento é 24 horas, fazemos a limpeza de madrugada ou antes da abertura.',
      },
      {
        q: 'Limpam caixa de gordura de prédio?',
        a: 'Sim. Atendemos as caixas coletivas de condomínios, com caminhão a vácuo e hidrojateamento.',
      },
    ],
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}

export const categorias: Servico['categoria'][] = ['Desentupimento', 'Limpa fossa e limpeza'];
