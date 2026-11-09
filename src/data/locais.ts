// Áreas atendidas: zonas de São Paulo (cada uma com página própria) e bairros.

export interface Zona {
  slug: string;
  nome: string;
  // "na Zona Norte", "no Centro"
  em: string;
  // Texto exclusivo da página de desentupidora da zona
  sobre: string;
  // Texto exclusivo da página de limpa fossa da zona
  fossa: string;
}

export interface Bairro {
  slug: string;
  nome: string;
  zona: string; // slug da zona
  // Texto exclusivo da página para não repetir conteúdo entre bairros
  sobre: string;
  vizinhos: string[];
}

export const zonas: Zona[] = [
  {
    slug: 'zona-sul',
    nome: 'Zona Sul',
    em: 'na Zona Sul',
    sobre:
      'A Zona Sul é a maior região da capital e mistura realidades bem diferentes: prédios altos em Moema e na Vila Mariana, casas e sobrados em Santo Amaro e no Jabaquara, e bairros com muitas residências térreas em direção a Interlagos, Capão Redondo e Grajaú. Em prédios, os chamados mais comuns são prumada de gordura e coluna de esgoto; nas casas, caixa de inspeção cheia e ramal entupido por raiz.',
    fossa:
      'No extremo sul, em áreas como Parelheiros, Grajaú e parte de Interlagos, muitas casas, chácaras e comércios ainda não estão ligados à rede de esgoto e dependem de fossa. Também atendemos caixas de gordura de restaurantes e condomínios em Moema, Santo Amaro e Campo Limpo.',
  },
  {
    slug: 'zona-leste',
    nome: 'Zona Leste',
    em: 'na Zona Leste',
    sobre:
      'A Zona Leste concentra a maior parte da população de São Paulo. Do Tatuapé e da Mooca, cheios de prédios novos, até Itaquera, São Mateus e Guaianases, onde predominam casas e sobrados com mais de uma moradia no mesmo terreno. Nesses imóveis o esgoto de várias famílias passa pelo mesmo ramal, e o entupimento aparece primeiro na caixa de inspeção do quintal.',
    fossa:
      'Em bairros mais afastados da Zona Leste, como partes de São Mateus, Guaianases e Itaim Paulista, ainda há imóveis com fossa. Também fazemos limpeza de caixa de gordura em restaurantes, padarias e condomínios do Tatuapé, da Mooca e da Penha.',
  },
  {
    slug: 'zona-norte',
    nome: 'Zona Norte',
    em: 'na Zona Norte',
    sobre:
      'Santana, Tucuruvi e Casa Verde têm muitos sobrados antigos, com tubulação de esgoto em manilha de barro, que trinca com o tempo e deixa entrar raiz. Já Pirituba, Brasilândia e Jaraguá ficam em terreno acidentado, e a rede com muito desnível acumula areia e terra nas caixas de passagem.',
    fossa:
      'Perto da Serra da Cantareira, em trechos do Tremembé, do Jaçanã e do Jaraguá, há casas e chácaras atendidas por fossa séptica. Atendemos também caixas de gordura de restaurantes e condomínios de Santana e da Vila Maria.',
  },
  {
    slug: 'zona-oeste',
    nome: 'Zona Oeste',
    em: 'na Zona Oeste',
    sobre:
      'Na Zona Oeste convivem os prédios de Perdizes e Pinheiros, as casas grandes do Butantã e do Morumbi e os galpões e comércios da Lapa e da Vila Leopoldina. Em bairros com muitos bares e restaurantes, a gordura é a principal causa de entupimento; nas ruas arborizadas, as raízes dentro da tubulação.',
    fossa:
      'Casas em ruas mais afastadas do Butantã, do Rio Pequeno e da Raposo Tavares ainda usam fossa. Na região de Pinheiros, Lapa e Perdizes, o serviço mais pedido é a limpeza de caixa de gordura de restaurantes e de condomínios.',
  },
  {
    slug: 'regiao-central',
    nome: 'Centro',
    em: 'no Centro',
    sobre:
      'O Centro tem os prédios mais antigos da cidade, com colunas de esgoto em ferro fundido e instalações que já passaram por muitas reformas. Bares, restaurantes e lanchonetes da Sé, da República e da Bela Vista geram muita gordura, e as prumadas dos edifícios pedem limpeza periódica.',
    fossa:
      'Na região central, o caminhão a vácuo é usado principalmente para limpar caixas de gordura e poços de recalque de edifícios, restaurantes, hotéis e galerias comerciais.',
  },
];

export const bairros: Bairro[] = [
  // Zona Sul
  { slug: 'santo-amaro', nome: 'Santo Amaro', zona: 'zona-sul', vizinhos: ['Campo Grande', 'Socorro', 'Chácara Santo Antônio', 'Brooklin'],
    sobre: 'Santo Amaro tem um centro comercial movimentado no entorno do Largo Treze e muitas ruas de casas e sobrados antigos. Atendemos lojas, galerias e restaurantes da região, além de residências com rede de esgoto em manilha, que entope com facilidade.' },
  { slug: 'moema', nome: 'Moema', zona: 'zona-sul', vizinhos: ['Indianópolis', 'Vila Nova Conceição', 'Campo Belo', 'Ibirapuera'],
    sobre: 'Moema é quase toda de prédios residenciais e tem uma das maiores concentrações de bares e restaurantes da cidade. Os chamados mais frequentes são prumada de cozinha entupida por gordura e limpeza de caixa de gordura de condomínio.' },
  { slug: 'vila-mariana', nome: 'Vila Mariana', zona: 'zona-sul', vizinhos: ['Paraíso', 'Aclimação', 'Saúde', 'Chácara Klabin'],
    sobre: 'Na Vila Mariana, sobrados e vilas antigas dividem a rua com edifícios novos. Nos imóveis mais velhos, a tubulação de barro ou de ferro costuma estar trincada, e o entupimento volta se a rede não for bem limpa.' },
  { slug: 'ipiranga', nome: 'Ipiranga', zona: 'zona-sul', vizinhos: ['Sacomã', 'Vila Prudente', 'Cambuci', 'Saúde'],
    sobre: 'O Ipiranga reúne casas tradicionais, galpões e muitos prédios novos. Atendemos desde o vaso entupido em apartamento até a rede de esgoto de galpões e comércios da região da Avenida Nazaré e do Sacomã.' },
  { slug: 'jabaquara', nome: 'Jabaquara', zona: 'zona-sul', vizinhos: ['Vila Guarani', 'Cidade Vargas', 'Americanópolis', 'Saúde'],
    sobre: 'O Jabaquara é um bairro residencial, com muitas casas e sobrados em ruas inclinadas. O desnível faz a rede de esgoto acumular areia e sujeira nas caixas de inspeção, que pedem limpeza para o esgoto não voltar.' },
  { slug: 'campo-limpo', nome: 'Campo Limpo', zona: 'zona-sul', vizinhos: ['Capão Redondo', 'Vila Andrade', 'Jardim São Luís', 'Morumbi'],
    sobre: 'No Campo Limpo predominam casas com mais de uma moradia no mesmo terreno, dividindo o mesmo ramal de esgoto. Quando ele entope, o retorno aparece na casa de baixo. Atendemos também os condomínios da região da Vila Andrade.' },
  { slug: 'interlagos', nome: 'Interlagos', zona: 'zona-sul', vizinhos: ['Cidade Dutra', 'Socorro', 'Grajaú', 'Jardim Satélite'],
    sobre: 'Interlagos tem casas com terrenos grandes, perto das represas, e muitas ainda usam fossa séptica. Fazemos o esgotamento com caminhão limpa fossa e o desentupimento de redes longas, comuns nesses terrenos.' },
  { slug: 'capao-redondo', nome: 'Capão Redondo', zona: 'zona-sul', vizinhos: ['Campo Limpo', 'Jardim Ângela', 'Jardim São Luís', 'Valo Velho'],
    sobre: 'O Capão Redondo é um dos bairros mais populosos da capital, com casas em terreno acidentado. Redes com muito desnível e caixas de passagem pequenas são a principal causa dos chamados de esgoto entupido.' },
  // Zona Leste
  { slug: 'tatuape', nome: 'Tatuapé', zona: 'zona-leste', vizinhos: ['Anália Franco', 'Carrão', 'Vila Formosa', 'Belém'],
    sobre: 'O Tatuapé cresceu para cima, com dezenas de torres residenciais, e mantém ruas de casas e muito comércio. Atendemos condomínios com prumada e caixa de gordura, além de restaurantes da região da Rua Itapura.' },
  { slug: 'mooca', nome: 'Mooca', zona: 'zona-leste', vizinhos: ['Belém', 'Brás', 'Água Rasa', 'Parque da Mooca'],
    sobre: 'A Mooca é um bairro tradicional, com casas de mais de cinquenta anos e antigos galpões que viraram prédios. Nos imóveis antigos, a rede de esgoto em manilha de barro é a campeã de entupimento por raiz.' },
  { slug: 'penha', nome: 'Penha', zona: 'zona-leste', vizinhos: ['Vila Matilde', 'Cangaíba', 'Tiquatira', 'Artur Alvim'],
    sobre: 'A Penha tem um centro comercial forte e muitas casas geminadas, que compartilham trechos da rede de esgoto. Atendemos lojas, residências e pequenos prédios do bairro a qualquer hora.' },
  { slug: 'itaquera', nome: 'Itaquera', zona: 'zona-leste', vizinhos: ['Artur Alvim', 'José Bonifácio', 'Cidade Líder', 'Guaianases'],
    sobre: 'Itaquera reúne conjuntos habitacionais, casas e um comércio em crescimento. Nos conjuntos, a rede coletiva de esgoto atende muitos apartamentos e pede desentupimento com máquina de grande porte ou hidrojateamento.' },
  { slug: 'sao-miguel-paulista', nome: 'São Miguel Paulista', zona: 'zona-leste', vizinhos: ['Ermelino Matarazzo', 'Vila Jacuí', 'Jardim Helena', 'Itaim Paulista'],
    sobre: 'São Miguel Paulista é um dos bairros mais antigos da Zona Leste, com comércio popular intenso e muitas casas. Atendemos entupimento de esgoto, ralo e vaso em residências e pontos comerciais.' },
  { slug: 'sao-mateus', nome: 'São Mateus', zona: 'zona-leste', vizinhos: ['Sapopemba', 'Iguatemi', 'Cidade Líder', 'Parque São Rafael'],
    sobre: 'Em São Mateus predominam casas e sobrados, muitos com construção ampliada ao longo dos anos. Reformas sem caixa de inspeção e canos com pouco caimento explicam boa parte dos entupimentos que atendemos ali.' },
  { slug: 'vila-prudente', nome: 'Vila Prudente', zona: 'zona-leste', vizinhos: ['Vila Alpina', 'Mooca', 'Sapopemba', 'Ipiranga'],
    sobre: 'A Vila Prudente combina casas antigas com os prédios que chegaram junto com o metrô. Atendemos desentupimento de pia e vaso em apartamentos e rede de esgoto em casas e sobrados.' },
  { slug: 'guaianases', nome: 'Guaianases', zona: 'zona-leste', vizinhos: ['Lajeado', 'Cidade Tiradentes', 'Itaquera', 'José Bonifácio'],
    sobre: 'Guaianases fica no extremo leste, com muitas casas em ruas inclinadas. Atendemos esgoto entupido, caixa de inspeção cheia e, nos imóveis sem ligação com a rede, limpeza de fossa.' },
  // Zona Norte
  { slug: 'santana', nome: 'Santana', zona: 'zona-norte', vizinhos: ['Tucuruvi', 'Casa Verde', 'Mandaqui', 'Vila Guilherme'],
    sobre: 'Santana mistura sobrados antigos e prédios novos em volta da Rua Voluntários da Pátria. Atendemos o comércio da região, condomínios com prumada de gordura e casas com rede de esgoto antiga.' },
  { slug: 'tucuruvi', nome: 'Tucuruvi', zona: 'zona-norte', vizinhos: ['Santana', 'Jaçanã', 'Vila Mazzei', 'Parada Inglesa'],
    sobre: 'O Tucuruvi é um bairro residencial, com casas, sobrados e prédios de porte médio. Os chamados mais comuns são vaso sanitário entupido, ralo de banheiro e caixa de inspeção cheia.' },
  { slug: 'casa-verde', nome: 'Casa Verde', zona: 'zona-norte', vizinhos: ['Limão', 'Santana', 'Cachoeirinha', 'Barra Funda'],
    sobre: 'A Casa Verde tem muitas casas térreas e sobrados em terreno plano, perto do rio Tietê. Em rede com pouco caimento, a gordura e a areia param com facilidade, e a limpeza periódica evita o retorno de esgoto.' },
  { slug: 'pirituba', nome: 'Pirituba', zona: 'zona-norte', vizinhos: ['Jaraguá', 'São Domingos', 'Freguesia do Ó', 'Vila Jaguara'],
    sobre: 'Pirituba é grande e residencial, com casas, sobrados e condomínios em ruas com muita ladeira. Atendemos desentupimento de esgoto e de ralos de água de chuva, que entopem com terra depois de chuva forte.' },
  { slug: 'freguesia-do-o', nome: 'Freguesia do Ó', zona: 'zona-norte', vizinhos: ['Brasilândia', 'Limão', 'Pirituba', 'Cachoeirinha'],
    sobre: 'A Freguesia do Ó é um dos bairros mais antigos de São Paulo e tem bares e restaurantes tradicionais em volta do largo. Atendemos caixa de gordura de comércio e rede de esgoto de casas antigas.' },
  { slug: 'vila-maria', nome: 'Vila Maria', zona: 'zona-norte', vizinhos: ['Vila Guilherme', 'Vila Medeiros', 'Parque Novo Mundo', 'Tatuapé'],
    sobre: 'A Vila Maria reúne residências, transportadoras e galpões. Atendemos tanto o entupimento doméstico quanto redes de esgoto de empresas, com máquina de grande porte e hidrojateamento.' },
  { slug: 'tremembe', nome: 'Tremembé', zona: 'zona-norte', vizinhos: ['Jaçanã', 'Tucuruvi', 'Mandaqui', 'Horto Florestal'],
    sobre: 'O Tremembé fica ao pé da Serra da Cantareira, com casas em ruas arborizadas e chácaras. Raiz dentro da tubulação é o problema mais frequente, e parte dos imóveis usa fossa séptica.' },
  { slug: 'jacana', nome: 'Jaçanã', zona: 'zona-norte', vizinhos: ['Tremembé', 'Tucuruvi', 'Vila Medeiros', 'Edu Chaves'],
    sobre: 'O Jaçanã é um bairro de casas e pequenos comércios no limite com Guarulhos. Atendemos desentupimento de pia, ralo, vaso e rede de esgoto, com saída imediata após o chamado.' },
  // Zona Oeste
  { slug: 'pinheiros', nome: 'Pinheiros', zona: 'zona-oeste', vizinhos: ['Vila Madalena', 'Jardim Paulistano', 'Alto de Pinheiros', 'Butantã'],
    sobre: 'Em Pinheiros convivem prédios residenciais, escritórios e centenas de bares e restaurantes. Gordura é o principal motivo de chamado: prumadas de cozinha, caixas de gordura e pias de estabelecimentos.' },
  { slug: 'lapa', nome: 'Lapa', zona: 'zona-oeste', vizinhos: ['Vila Romana', 'Água Branca', 'Vila Leopoldina', 'Pompeia'],
    sobre: 'A Lapa tem comércio de rua forte, mercado municipal, casas antigas e galpões. Atendemos lojas e restaurantes fora do horário de funcionamento e residências com tubulação antiga.' },
  { slug: 'butanta', nome: 'Butantã', zona: 'zona-oeste', vizinhos: ['Rio Pequeno', 'Vila Sônia', 'Jardim Bonfiglioli', 'Pinheiros'],
    sobre: 'O Butantã é residencial e muito arborizado, com casas em terrenos grandes. Raízes procuram a umidade do esgoto e entram pelas juntas do cano; por isso o corte de raiz e o hidrojateamento são serviços comuns no bairro.' },
  { slug: 'perdizes', nome: 'Perdizes', zona: 'zona-oeste', vizinhos: ['Pompeia', 'Sumaré', 'Barra Funda', 'Pacaembu'],
    sobre: 'Perdizes é um bairro de ladeiras e prédios residenciais. Atendemos condomínios com coluna de esgoto entupida, caixas de gordura coletivas e apartamentos com pia, ralo ou vaso obstruído.' },
  { slug: 'vila-madalena', nome: 'Vila Madalena', zona: 'zona-oeste', vizinhos: ['Pinheiros', 'Sumarezinho', 'Alto de Pinheiros', 'Vila Beatriz'],
    sobre: 'A Vila Madalena é conhecida pelos bares, restaurantes e ateliês instalados em casas antigas. Cozinhas comerciais em imóveis que eram residenciais sobrecarregam a tubulação, e a limpeza da caixa de gordura precisa ser frequente.' },
  { slug: 'morumbi', nome: 'Morumbi', zona: 'zona-oeste', vizinhos: ['Vila Andrade', 'Real Parque', 'Vila Sônia', 'Paraisópolis'],
    sobre: 'O Morumbi tem casas de alto padrão e grandes condomínios. As redes de esgoto são longas, com muitas caixas de passagem, e pedem equipamento de maior alcance. Atendemos também a limpeza de caixas de gordura coletivas.' },
  { slug: 'vila-leopoldina', nome: 'Vila Leopoldina', zona: 'zona-oeste', vizinhos: ['Lapa', 'Jaguaré', 'Alto da Lapa', 'Ceagesp'],
    sobre: 'A Vila Leopoldina trocou galpões por condomínios e ainda abriga a Ceagesp, estúdios e empresas. Atendemos prédios novos, restaurantes e galpões com rede de esgoto de grande diâmetro.' },
  { slug: 'barra-funda', nome: 'Barra Funda', zona: 'zona-oeste', vizinhos: ['Água Branca', 'Perdizes', 'Santa Cecília', 'Bom Retiro'],
    sobre: 'A Barra Funda mistura prédios comerciais, casas de eventos, galpões e novos residenciais. Atendemos empresas e condomínios em qualquer horário, inclusive com serviços programados para a madrugada.' },
  // Centro
  { slug: 'se', nome: 'Sé', zona: 'regiao-central', vizinhos: ['República', 'Liberdade', 'Brás', 'Glicério'],
    sobre: 'A Sé concentra edifícios comerciais antigos, com colunas de esgoto em ferro fundido e banheiros de uso intenso. Atendemos prédios, lojas e restaurantes do centro histórico a qualquer hora.' },
  { slug: 'republica', nome: 'República', zona: 'regiao-central', vizinhos: ['Sé', 'Santa Cecília', 'Consolação', 'Bela Vista'],
    sobre: 'Na República há prédios residenciais das décadas de 1950 e 1960, hotéis, bares e galerias. As prumadas antigas acumulam incrustação e gordura e pedem limpeza com máquina e hidrojateamento.' },
  { slug: 'bela-vista', nome: 'Bela Vista', zona: 'regiao-central', vizinhos: ['Consolação', 'Liberdade', 'Paraíso', 'Jardim Paulista'],
    sobre: 'A Bela Vista, onde fica o Bixiga, tem cantinas, teatros e sobrados centenários ao lado dos prédios da região da Avenida Paulista. Atendemos caixas de gordura de restaurantes e redes de esgoto antigas.' },
  { slug: 'liberdade', nome: 'Liberdade', zona: 'regiao-central', vizinhos: ['Sé', 'Aclimação', 'Bela Vista', 'Cambuci'],
    sobre: 'A Liberdade tem uma das maiores concentrações de restaurantes do centro, além de prédios residenciais e pensões. Gordura na tubulação e caixas de gordura cheias são os chamados mais comuns.' },
  { slug: 'consolacao', nome: 'Consolação', zona: 'regiao-central', vizinhos: ['Higienópolis', 'Bela Vista', 'Cerqueira César', 'República'],
    sobre: 'Na Consolação predominam prédios residenciais e comerciais, bares e casas noturnas. Atendemos condomínios com coluna entupida e estabelecimentos que precisam do serviço fora do horário de funcionamento.' },
  { slug: 'santa-cecilia', nome: 'Santa Cecília', zona: 'regiao-central', vizinhos: ['Higienópolis', 'Campos Elíseos', 'Barra Funda', 'Vila Buarque'],
    sobre: 'Santa Cecília tem prédios residenciais de várias épocas e muitos bares e cafés. Nos edifícios mais antigos, a tubulação de ferro fundido pede cuidado na escolha do equipamento, para desentupir sem danificar.' },
];

export const zonaPath = (z: Zona) => `/desentupidora-na-${z.slug}/`;
export const fossaZonaPath = (z: Zona) => `/limpa-fossa-na-${z.slug}/`;
export const bairroPath = (b: Bairro) => `/desentupidora-em-${b.slug}/`;
export const getZona = (slug: string) => zonas.find((z) => z.slug === slug)!;

export function bairrosPorZona() {
  return zonas.map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona.slug) }));
}
