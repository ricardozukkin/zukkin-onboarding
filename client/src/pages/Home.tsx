import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Users, Zap } from "lucide-react";
import { useState } from "react";

/**
 * Design: Modern Tech Elegance - Dark background with red accents
 * Color Scheme: Vermelho vibrante (#FF3D3D), Branco, Cinza escuro
 * Typography: Poppins para headlines, Inter para body text
 * Layout: Assimétrico e dinâmico com elementos sobrepostos
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-display text-xl text-white">Zukkin</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("historia")}
              className="text-sm hover:text-red-500 transition-colors"
            >
              História
            </button>
            <button
              onClick={() => scrollToSection("missao")}
              className="text-sm hover:text-red-500 transition-colors"
            >
              Missão & Valores
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-sm hover:text-red-500 transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-sm hover:text-red-500 transition-colors"
            >
              Benefícios
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/zukkin-hero-background-eXMx7JB4BfVj6ZtuUHsM9f.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl z-0"></div>

        {/* Content */}
        <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
              Bem-vindo(a) ao
              <br />
              <span className="gradient-text">Zukkin</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Inteligência de Preços que Transforma Seu Negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("historia")}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-semibold animate-pulse-red"
              >
                Conheça Nossa História
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("missao")}
                className="border-red-500 text-red-500 hover:bg-red-500/10 px-8 py-6 text-lg font-semibold"
              >
                Nossa Missão
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-red-500" size={32} />
          </div>
        </div>
      </section>

      {/* Diretores Section */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-900">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Liderança</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Bruno Fernandes",
                role: "Diretor",
                icon: "🚀",
              },
              {
                name: "Ricardo Forte",
                role: "Diretor",
                icon: "💡",
              },
            ].map((director, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 hover-lift text-center"
              >
                <div className="text-5xl mb-4">{director.icon}</div>
                <h3 className="font-heading text-2xl mb-2">{director.name}</h3>
                <p className="text-gray-400">{director.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História Section */}
      <section id="historia" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Nossa História</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-8">
            {[
              { year: "2014", title: "PagPouco.com", desc: "Onde a cerveja está mais barata?" },
              { year: "2016", title: "Zukkin Fundada", desc: "Investimento Maxinvest e nascimento da visão" },
              { year: "2018", title: "Renascimento", desc: "Produtos B2B e expansão de mercado" },
              { year: "2020", title: "Reconhecimento", desc: "Melhor Software de Pricing Varejo" },
              { year: "2024", title: "Consolidação", desc: "Manter e crescer em mercado competitivo" },
              { year: "2025", title: "Expansão", desc: "Time ampliado e novos horizontes" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-500/20 border border-red-500/50">
                    <span className="font-display text-red-500 font-bold">{item.year.slice(-2)}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-red-500 mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section id="missao" className="py-20 bg-gray-900 relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Missão, Visão e Valores</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                desc: "Democratizar o Pricing no varejo e garantir que os clientes tenham as melhores precificações nos seus negócios.",
                icon: "🎯",
              },
              {
                title: "Visão",
                desc: "Em 5 anos ter produtos utilizados por 50% dos varejistas do Brasil.",
                icon: "🔭",
              },
              {
                title: "Valores",
                desc: "Respeito, Inovação, Ética e Alegria guiam todas as nossas decisões.",
                icon: "💎",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 hover-lift text-center animate-slide-in-right"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-2xl mb-4 text-red-500">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Nossos Produtos</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Zukkin Pesquisa",
                desc: "Aplicativo para equipe com personalização e integração",
              },
              {
                name: "Zukkin ZRobot",
                desc: "Captura massiva de dados com entrega contínua",
              },
              {
                name: "Zukkin ZGO",
                desc: "Pesquisa sob demanda com API de integração",
              },
              {
                name: "Zukkin Pricing",
                desc: "Ferramenta de precificação inteligente e automatizada",
              },
              {
                name: "Zukkin Analytics",
                desc: "Plataforma de competitividade e análise de mercado",
              },
              {
                name: "Zukkin Market",
                desc: "Monitoramento de preços online com crawler avançado",
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-6 hover-lift group cursor-pointer"
              >
                <div className="h-12 w-12 bg-red-500/20 rounded-lg mb-4 group-hover:bg-red-500/40 transition-colors"></div>
                <h3 className="font-heading text-lg mb-2 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-20 bg-gray-900">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Nossos Clientes</h2>
            <p className="text-gray-400 mb-8">+100 Redes Varejistas confiam em nós</p>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {["GPA", "Muffato", "Líder Atacadista", "Grupo Pereira", "Swift", "Rede Krill", "Nissei", "Tonin"].map(
              (client, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 flex items-center justify-center h-24 hover-lift text-center"
                >
                  <p className="font-heading text-sm">{client}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Benefícios do Time</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "🏢", title: "Modalidade Híbrida", desc: "Flexibilidade de trabalho" },
              { icon: "🎉", title: "Day Off Aniversário", desc: "Seu dia especial é nosso feriado" },
              { icon: "🏥", title: "Plano de Saúde", desc: "SulAmérica (após 90 dias)" },
              { icon: "🎟️", title: "Convênio SESC", desc: "Benefícios e descontos" },
              { icon: "💰", title: "Bônus Semestral", desc: "Recompensa pelo desempenho" },
              { icon: "⭐", title: "Folga Destaque", desc: "Reconhecimento do mês" },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 hover-lift flex gap-6 animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg mb-2 text-red-500">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regiões e Comunicação */}
      <section className="py-20 bg-gray-900">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Regiões */}
            <div className="animate-slide-in-left">
              <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
                <MapPin className="text-red-500" size={28} />
                Atuação Nacional
              </h3>
              <div className="bg-card border border-border rounded-lg p-8">
                <p className="text-gray-400 mb-4">Presente em todo o Brasil com</p>
                <p className="font-heading text-xl text-red-500 mb-4">Polo Presencial em Santos/SP</p>
                <p className="text-sm text-gray-500">Conectando varejistas de norte a sul do país</p>
              </div>
            </div>

            {/* Comunicação */}
            <div className="animate-slide-in-right">
              <h3 className="font-heading text-2xl mb-6 flex items-center gap-3">
                <Zap className="text-red-500" size={28} />
                Comunicação
              </h3>
              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Teams</p>
                  <p className="font-heading">Comunicação Interna</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-heading">nome.sobrenome@zukkin.com</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Gestão</p>
                  <p className="font-heading">Plataforma Zukkin ADM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Equipamentos Fornecidos</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "📱", item: "Celular + Carregador" },
              { icon: "💻", item: "Notebook + Carregador" },
              { icon: "🖱️", item: "Mouse" },
              { icon: "🎧", item: "Fone de Ouvido" },
            ].map((equip, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-lg p-8 hover-lift text-center"
              >
                <div className="text-5xl mb-4">{equip.icon}</div>
                <p className="font-heading text-lg">{equip.item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Encerramento Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663336173657/Tnba4XxTLX7enrbaMxc7RB/zukkin-technology-abstract-Yzj9sKe74tFv9hh6yLoiYK.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.15,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>

        <div className="container max-w-4xl mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
              Encerramos a Etapa Inicial
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              E iniciamos um ciclo de desenvolvimento contínuo, baseado em conhecimento, colaboração e excelência,
              desejando conquistas, aprendizados e impacto positivo em sua trajetória.
            </p>
            <div className="mb-12">
              <p className="font-display text-3xl md:text-4xl text-red-500">Seja bem-vindo(a) oficialmente!!!</p>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg font-semibold animate-pulse-red">
              Comece Sua Jornada
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-border py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <span className="font-display text-white">Zukkin</span>
              </div>
              <p className="text-gray-500 text-sm">Inteligência de Preços para o Varejo</p>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Market
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>
                  <a href="tel:+5513978102919" className="hover:text-red-500 transition-colors">
                    (13) 97810-2919
                  </a>
                </li>
                <li>
                  <a href="mailto:ricardo@zukkin.com" className="hover:text-red-500 transition-colors">
                    ricardo@zukkin.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Zukkin Brasil Inteligência de Mercado S/A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
