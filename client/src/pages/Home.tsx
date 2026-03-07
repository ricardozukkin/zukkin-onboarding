import { Button } from "@/components/ui/button";
import { useEffect } from "react";

/**
 * Design: Clean & Professional - Paleta clara com vermelho vibrante
 * Baseado no HTML fornecido com melhorias de conteúdo
 * Tipografia: Barlow Condensed para headlines, Barlow para body
 * Cores: #E30613 (vermelho), #f5f4f0 (fundo), #1a1a1a (texto)
 */

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-500");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden" style={{ fontFamily: "'Barlow', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between h-[70px]">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Z</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-9">
            <button
              onClick={() => scrollToSection("historia")}
              className="text-xs font-semibold tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              História
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-xs font-semibold tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-xs font-semibold tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("time")}
              className="text-xs font-semibold tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Time
            </button>
          </div>
          <button
            onClick={() => scrollToSection("praticas")}
            className="text-xs font-bold tracking-widest uppercase bg-red-600 text-white px-6 py-2.5 hover:bg-red-700 transition-colors"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Boas Práticas
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gray-900">
        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        ></div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 55% at 55% 40%, rgba(227,6,19,.18) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 15% 85%, rgba(227,6,19,.07) 0%, transparent 60%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 border border-red-600/35 px-5 py-1.5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
            Bem-vindo ao Zukkin
          </div>

          <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Inteligência de <span className="text-red-600">Preços</span>
          </h1>

          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Transforme seus dados em decisões estratégicas de precificação que aumentam margens e competitividade.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => scrollToSection("historia")}
              className="bg-red-600 hover:bg-red-700 text-white px-9 py-3 text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Conheça Nossa História
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("produtos")}
              className="border-gray-400 text-gray-700 hover:bg-gray-50 px-9 py-3 text-sm font-semibold tracking-widest uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Nossos Produtos
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase text-gray-500" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Scroll</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-red-600 to-transparent animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
          {[
            { num: "2014", label: "Fundação" },
            { num: "+100", label: "Clientes" },
            { num: "6", label: "Produtos" },
            { num: "2025", label: "Expansão" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center py-9 px-6">
              <div className="text-4xl md:text-5xl font-black text-red-600 leading-none" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {stat.num}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-widest font-bold mt-1.5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diretores Section */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal id="diretores">
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Liderança
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossos Diretores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-14">
            {[
              {
                name: "Bruno Fernandes",
                role: "Diretor",
                bio: "Visionário na inteligência de mercado, lidera a estratégia de inovação e crescimento da Zukkin.",
              },
              {
                name: "Ricardo Forte",
                role: "Diretor",
                bio: "Especialista em tecnologia e pricing, responsável pela excelência operacional e desenvolvimento de produtos.",
              },
            ].map((dir, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-red-600 p-8 hover:shadow-lg transition-shadow"
                data-reveal
              >
                <h3 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {dir.name}
                </h3>
                <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {dir.role}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{dir.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id="historia" className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossa Jornada
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              História
            </h2>
          </div>

          <div className="space-y-0 relative pl-12">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-600/30 to-transparent"></div>

            {[
              { year: "2014", title: "PagPouco.com", desc: "Onde a cerveja está mais barata?" },
              { year: "2016", title: "Zukkin Fundada", desc: "Investimento Maxinvest e nascimento da visão" },
              { year: "2018", title: "Renascimento", desc: "Produtos B2B e expansão de mercado" },
              { year: "2020", title: "Reconhecimento", desc: "Melhor Software de Pricing Varejo" },
              { year: "2024", title: "Consolidação", desc: "Manter e crescer em mercado competitivo" },
              { year: "2025", title: "Expansão", desc: "Time ampliado e novos horizontes" },
            ].map((item, idx) => (
              <div key={idx} className="pb-12 relative" data-reveal>
                {/* Timeline Dot */}
                <div className="absolute -left-6 top-1 w-3 h-3 bg-red-600 rounded-full border-4 border-gray-100"></div>

                <div className="text-4xl font-black text-gray-300 leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {item.year}
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-0 bg-red-600">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-red-700">
          {[
            {
              label: "Missão",
              icon: "🎯",
              text: "Democratizar o Pricing no varejo e garantir que os clientes tenham as melhores precificações nos seus negócios.",
            },
            {
              label: "Visão",
              icon: "🔭",
              text: "Em 5 anos ter produtos utilizados por 50% dos varejistas do Brasil.",
            },
            {
              label: "Valores",
              icon: "💎",
              text: "Respeito, Inovação, Ética e Alegria guiam todas as nossas decisões.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-black/8 p-16 text-center hover:bg-black/16 transition-colors" data-reveal>
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {item.label}
              </div>
              <p className="text-white/95 leading-relaxed font-light text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-28 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Soluções
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossos Produtos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Zukkin Pesquisa", desc: "Aplicativo para equipe com personalização e integração" },
              { name: "Zukkin ZRobot", desc: "Captura massiva de dados com entrega contínua" },
              { name: "Zukkin ZGO", desc: "Pesquisa sob demanda com API de integração" },
              { name: "Zukkin Pricing", desc: "Ferramenta de precificação inteligente e automatizada" },
              { name: "Zukkin Analytics", desc: "Plataforma de competitividade e análise de mercado" },
              { name: "Zukkin Market", desc: "Monitoramento de preços online com crawler avançado" },
            ].map((prod, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border-b-3 border-red-600/0 hover:border-red-600 transition-all hover:shadow-lg hover:-translate-y-1"
                data-reveal
              >
                <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Produto {idx + 1}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {prod.name}
                </h3>
                <p className="text-sm text-gray-600">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="bg-white border-y border-gray-200 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs font-bold tracking-widest uppercase text-gray-500 text-center mb-9" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            +100 Redes Varejistas Confiam em Nós
          </div>
          <div className="flex flex-wrap justify-center items-center gap-0 divide-x divide-gray-200">
            {["GPA", "Muffato", "Líder Atacadista", "Grupo Pereira", "Swift", "Rede Krill", "Nissei", "Tonin"].map((client, idx) => (
              <div key={idx} className="text-sm font-black text-gray-400 px-6 py-4 hover:text-gray-700 transition-colors" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Vantagens
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Benefícios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
            {[
              { icon: "🏢", title: "Modalidade Híbrida", desc: "Flexibilidade de trabalho" },
              { icon: "🎉", title: "Day Off Aniversário", desc: "Seu dia especial é nosso feriado" },
              { icon: "🏥", title: "Plano de Saúde", desc: "SulAmérica (após 90 dias)" },
              { icon: "🎟️", title: "Convênio SESC", desc: "Benefícios e descontos" },
              { icon: "💰", title: "Bônus Semestral", desc: "Recompensa pelo desempenho" },
              { icon: "⭐", title: "Folga Destaque", desc: "Reconhecimento do mês" },
            ].map((ben, idx) => (
              <div
                key={idx}
                className="border-r border-b border-gray-200 p-8 hover:bg-white transition-colors flex gap-4"
                data-reveal
              >
                <div className="text-3xl flex-shrink-0">{ben.icon}</div>
                <div>
                  <h4 className="font-black text-gray-900 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {ben.title}
                  </h4>
                  <p className="text-sm text-gray-600">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organograma Section */}
      <section id="time" className="py-28 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Estrutura
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nosso Time
            </h2>
          </div>

          <div className="bg-white p-12 rounded border border-gray-200" data-reveal>
            <div className="text-center mb-8">
              <div className="inline-block bg-white border border-gray-300 rounded px-6 py-3 mb-4">
                <div className="text-xs font-bold tracking-widest uppercase text-gray-600 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Direção
                </div>
                <div className="text-lg font-black text-gray-900" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Bruno & Ricardo
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-12">
              {["Desenvolvimento", "Financeiro", "Operações", "Projetos", "Qualidade", "RH"].map((dept, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-200 rounded px-4 py-3 text-center hover:border-red-600 transition-colors" data-reveal>
                  <div className="text-xs font-bold tracking-widest uppercase text-gray-600" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {dept}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Práticas Section */}
      <section id="praticas" className="py-28 px-6 bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Cultura
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Boas Práticas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "🧹", title: "Limpeza", desc: "Ambiente organizado e acolhedor" },
              { icon: "☕", title: "Cafeteria", desc: "Café e lanches disponíveis" },
              { icon: "❄️", title: "Ar-condicionado", desc: "Conforto térmico garantido" },
              { icon: "🤝", title: "Colaboração", desc: "Trabalho em equipe e respeito" },
            ].map((prac, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all flex gap-4"
                data-reveal
              >
                <div className="text-3xl flex-shrink-0">{prac.icon}</div>
                <div>
                  <h4 className="font-black text-gray-900 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {prac.title}
                  </h4>
                  <p className="text-sm text-gray-600">{prac.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encerramento Section */}
      <section className="py-28 px-6 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/zukkin-technology-abstract-Yzj9sKe74tFv9hh6yLoiYK.webp')", backgroundSize: "cover" }}></div>

        <div className="max-w-3xl mx-auto text-center relative z-10" data-reveal>
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Encerramos a Etapa Inicial
          </h2>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed font-light">
            E iniciamos um ciclo de desenvolvimento contínuo, baseado em conhecimento, colaboração e excelência, desejando conquistas, aprendizados e impacto positivo em sua trajetória.
          </p>

          <div className="text-4xl font-black text-red-600 mb-12" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Seja bem-vindo(a) oficialmente!!!
          </div>

          <Button className="bg-red-600 hover:bg-red-700 text-white px-9 py-3 text-sm font-bold tracking-widest uppercase" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Comece Sua Jornada
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-11 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Z</span>
            </div>
            <span className="text-white text-sm font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>Zukkin</span>
          </div>

          <p className="text-gray-600 text-xs">© 2026 Zukkin Brasil Inteligência de Mercado S/A. Todos os direitos reservados.</p>

          <div className="flex gap-3">
            {["f", "i", "in"].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 border border-gray-700 rounded flex items-center justify-center text-gray-600 hover:text-white hover:border-gray-500 transition-colors text-xs font-bold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
