import { Button } from "@/components/ui/button";
import { useEffect } from "react";

/**
 * Design: Clean & Professional - Identidade Visual Zukkin
 * Cores dos Produtos:
 * - ZPricing: #02385A (Azul Escuro)
 * - ZAnalytics: #EE8625 (Laranja)
 * - ZGO: #78AE3F (Verde)
 * - ZRobot: #6B2246 (Marrom)
 * - ZPromo: #FF6B6B (Coral)
 * - ZConsulting: #6B7280 (Cinza)
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-between h-[70px]">
          <a href="#hero" className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/LogoZukkin2_7f4d5964.png"
              alt="Zukkin"
              className="h-8"
            />
          </a>
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
            background: "radial-gradient(ellipse 70% 55% at 55% 40%, rgba(207,17,13,.18) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 15% 85%, rgba(207,17,13,.07) 0%, transparent 60%)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-600 border border-red-600/35 px-5 py-1.5" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
            Bem-vindo ao Futuro do Pricing
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-none tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            Bem vindo ao futuro do <span className="text-red-600">Pricing</span>
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
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
          {[
            { num: "2014", label: "Fundação" },
            { num: "+100", label: "Clientes" },
            { num: "6", label: "Produtos" },
            { num: "2026", label: "Inovação" },
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

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "Ricardo Forte",
                role: "Diretor",
                bio: "Especialista em tecnologia e pricing, responsável pela excelência operacional e desenvolvimento de produtos inovadores.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/pasted_file_vXsXiy_image_152329e1.png"
              },
              {
                name: "Bruno Fernandes",
                role: "Diretor",
                bio: "Visionário na inteligência de mercado, lidera a estratégia de inovação e crescimento da Zukkin com foco em resultados.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/pasted_file_2fZsPS_image_052c9e57.png"
              },
            ].map((dir, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                data-reveal
              >
                <img src={dir.image} alt={dir.name} className="w-full h-80 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {dir.name}
                  </h3>
                  <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {dir.role}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{dir.bio}</p>
                </div>
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
              { year: "2026", title: "Agora você faz parte", desc: "Bem-vindo à nossa história de sucesso", highlight: true },
            ].map((item, idx) => (
              <div key={idx} className="pb-12 relative" data-reveal>
                {/* Timeline Dot */}
                <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-4 ${item.highlight ? 'bg-red-600 border-red-600' : 'bg-red-600 border-gray-100'}`}></div>

                {item.highlight ? (
                  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-6 rounded-lg">
                    <div className="text-4xl font-black leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.year}
                    </div>
                    <h4 className="text-2xl font-black mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-white/90">{item.desc}</p>
                  </div>
                ) : (
                  <>
                    <div className="text-4xl font-black text-gray-300 leading-none mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.year}
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Redesigned */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossos Pilares
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Missão",
                text: "Democratizar o Pricing no varejo e garantir que os clientes tenham as melhores precificações nos seus negócios.",
              },
              {
                label: "Visão",
                text: "Em 5 anos ter produtos utilizados por 50% dos varejistas do Brasil.",
              },
              {
                label: "Valores",
                text: "Respeito, Inovação, Ética e Alegria guiam todas as nossas decisões.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative" data-reveal>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-red-600/5 rounded-full"></div>
                <div className="relative bg-white border-l-4 border-red-600 pl-8 pr-6 py-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                    {item.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-base">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Section - Com Cores Oficiais */}
      <section id="produtos" className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Soluções
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Nossos Produtos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "ZPricing", 
                desc: "Ferramenta de precificação inteligente e automatizada com recomendações em tempo real",
                color: "#02385A"
              },
              { 
                name: "ZAnalytics", 
                desc: "Plataforma de competitividade e análise de mercado com dashboards avançados",
                color: "#EE8625"
              },
              { 
                name: "ZGO", 
                desc: "Pesquisa sob demanda com API de integração para dados precisos",
                color: "#78AE3F"
              },
              { 
                name: "ZRobot", 
                desc: "Captura massiva de dados com entrega contínua e automação",
                color: "#6B2246"
              },
              { 
                name: "ZPromo", 
                desc: "Gestão de promoções e campanhas com otimização de margens",
                color: "#FF6B6B"
              },
              { 
                name: "ZConsulting", 
                desc: "Consultoria especializada em estratégia de pricing e mercado",
                color: "#6B7280"
              },
            ].map((prod, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl text-white shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all"
                style={{ backgroundColor: prod.color }}
                data-reveal
              >
                <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {prod.name}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section - Carrossel */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Confiança
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Alguns Clientes
            </h2>
          </div>
          <p className="text-lg text-gray-500 mb-16 font-light" data-reveal>
            <span className="text-5xl font-black text-red-600" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>+100</span>{" "}
            <span className="text-gray-600">Redes, dentre elas atendemos:</span>
          </p>
        </div>

        {/* Carousel Row 1 - slides left */}
        <div className="relative mb-8">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex animate-[scrollLeft_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-8 mr-8">
                {[
                  { name: "Vivo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/bF0DSB9gNVOg_8d38e125.png" },
                  { name: "Votorantim", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/Wmbs16oWI8wN_711017f4.png" },
                  { name: "Super Muffato", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/NCWLt44MBkoy_44381369.jpg" },
                  { name: "Grupo Pereira", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/N4wIPTB9rM0M_ee08b0a7.jpg" },
                  { name: "Zaffari", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/OB9qE9PKGRao_671e795f.jpg" },
                  { name: "Tonin", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/U2ULP459xT3h_1a24441b.jpg" },
                  { name: "Grupo Coutinho", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/dlNDMwyNkcid_ff232ca6.jpg" },
                  { name: "Nordestão", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/wtXsTqbUHqyH_49bd05ca.jpg" },
                  { name: "Hiperideal", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/u3kM96CIg2D9_4f088029.png" },
                ].map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 border border-gray-100 rounded-xl px-8 py-5 flex items-center justify-center h-24 w-48 flex-shrink-0 hover:shadow-lg hover:border-red-200 hover:scale-105 transition-all duration-300"
                  >
                    <img src={client.logo} alt={client.name} className="max-h-14 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Row 2 - slides right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
          <div className="flex animate-[scrollRight_35s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-8 mr-8">
                {[
                  { name: "Pague Menos", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/pfCZxhAjFW58_a1c182fb.jpg" },
                  { name: "Shibata", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/2G2PA4afmNcR_c74098d9.jpg" },
                  { name: "Confiança", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/Wzmid3nRwc9T_de8d5e1a.png" },
                  { name: "São Vicente", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/PhUVpR6m4kd2_dd4435e6.png" },
                  { name: "Costa Atacadão", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/hwtqmapKNcZI_66c07095.jpg" },
                  { name: "Bahamas", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/Q7EmsdAFsiIH_2bb01b8b.png" },
                  { name: "Nissei", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/cx8jY6dbKJgV_0c806e22.png" },
                  { name: "Mart Minas", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/b0CxvkHgqGHU_0791dcf7.png" },
                  { name: "Zona Sul", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/KEvkZXe3H2zm_275b9850.jpg" },
                  { name: "Atakarejo", logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/dXWTPXq7kS2u_208708e4.jpeg" },
                ].map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 border border-gray-100 rounded-xl px-8 py-5 flex items-center justify-center h-24 w-48 flex-shrink-0 hover:shadow-lg hover:border-red-200 hover:scale-105 transition-all duration-300"
                  >
                    <img src={client.logo} alt={client.name} className="max-h-14 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section - Redesigned Sofisticado */}
      <section id="beneficios" className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Vantagens
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Benefícios
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🏢", title: "Modalidade Híbrida", desc: "Flexibilidade de trabalho com equilíbrio entre home office e presencial" },
              { icon: "🎉", title: "Day Off Aniversário", desc: "Seu dia especial é nosso feriado - celebramos você" },
              { icon: "🏥", title: "Plano de Saúde", desc: "Cobertura completa SulAmérica após 90 dias de contratação" },
              { icon: "🎟️", title: "Convênio SESC", desc: "Acesso a benefícios e descontos em lazer e cultura" },
              { icon: "💰", title: "Bônus Semestral", desc: "Recompensa pelo desempenho e resultados alcançados" },
              { icon: "⭐", title: "Folga Destaque", desc: "Reconhecimento mensal com folga extra para colaboradores destaque" },
            ].map((ben, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 p-8 rounded-xl hover:border-red-600 hover:shadow-xl transition-all relative overflow-hidden"
                data-reveal
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-red-600 transition-all duration-300"></div>
                
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{ben.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-black text-gray-900 mb-2 text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {ben.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{ben.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Section - Organograma Corrigido */}
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

          <div className="bg-white p-12 rounded-xl border-2 border-gray-200" data-reveal>
            {/* Diretoria */}
            <div className="text-center mb-16">
              <div className="inline-block bg-red-600 text-white rounded-lg px-8 py-4 mb-8">
                <div className="text-xs font-bold tracking-widest uppercase text-white/80 mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Diretoria
                </div>
                <div className="text-xl font-black" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Ricardo & Bruno
                </div>
              </div>
            </div>

            {/* Vertical Line */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-12 bg-gray-300"></div>
            </div>

            {/* Departamentos - Alinhados e com cores dos produtos */}
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { name: "Fabiana", role: "Financeiro & RH", color: "#6B7280" },
                { name: "Chayeni", role: "Pricing", color: "#02385A" },
                { name: "Guilherme", role: "Analytics & ZGO", color: "#EE8625" },
                { name: "Rafael", role: "ZRobot & ZPromo", color: "#6B2246" },
              ].map((dept, idx) => (
                <div key={idx} className="text-center" data-reveal>
                  <div className="flex justify-center mb-4">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                  <div className="text-white rounded-lg px-6 py-4 min-w-max" style={{ backgroundColor: dept.color }}>
                    <div className="font-black text-lg mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {dept.name}
                    </div>
                    <div className="text-xs font-bold tracking-widest uppercase text-white/80" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {dept.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Boas Práticas Section */}
      <section id="praticas" className="py-28 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16" data-reveal>
            <div className="text-xs font-bold tracking-widest uppercase text-red-600 mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Cultura
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
              Boas Práticas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "🤝", title: "Colaboração", desc: "Trabalho em equipe, respeito e comunicação aberta entre todos os departamentos" },
              { icon: "🚀", title: "Inovação Contínua", desc: "Incentivamos novas ideias e experimentação para melhorar nossos produtos" },
              { icon: "📊", title: "Dados Orientados", desc: "Decisões baseadas em dados e análises para resultados comprovados" },
              { icon: "🎓", title: "Desenvolvimento", desc: "Investimento em treinamento e crescimento profissional de nosso time" },
              { icon: "💚", title: "Bem-estar", desc: "Ambiente saudável, confortável e acolhedor para todos" },
              { icon: "🏆", title: "Excelência", desc: "Compromisso com qualidade e resultados em tudo que fazemos" },
            ].map((prac, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border-l-4 border-red-600 rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-all flex gap-4"
                data-reveal
              >
                <div className="text-4xl flex-shrink-0">{prac.icon}</div>
                <div>
                  <h4 className="font-black text-gray-900 mb-2 text-lg" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
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
      <section className="py-28 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
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
          <a href="#hero" className="flex items-center gap-2">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/LogoZukkin2_7f4d5964.png"
              alt="Zukkin"
              className="h-8"
            />
          </a>

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
