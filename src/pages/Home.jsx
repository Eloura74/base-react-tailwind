import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEO
        title="Accueil - ReactVite"
        description="Bienvenue sur ReactVite, une application rapide et performante."
      />
      <main>
        <h1 className="text-4xl font-bold mb-6">Bienvenue sur ReactVite !</h1>
        <section className="prose lg:prose-xl">
          <p className="text-lg text-gray-700">
            Cette application est construite avec React, Vite et Tailwind CSS pour une expérience utilisateur optimale.
          </p>
          <div className="mt-8">
            <a
              href="/react"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir la démo React
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
