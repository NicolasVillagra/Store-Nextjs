const callouts = [
    {
      name: 'Ropa para Hombre',
      description: 'Descubre nuestra colección para hombres',
      imageSrc: 'https://images.unsplash.com/photo-1572897938832-fcce7f53ccaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      imageAlt: 'Ropa para hombre en una tienda',
      href: 'manCategory',
    },
    {
      name: 'Ropa para Mujer',
      description: 'Encuentra moda femenina de alta calidad',
      imageSrc: 'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      imageAlt: 'Ropa para mujer en una tienda',
      href: '#',
    },
    {
      name: 'Accesorios',
      description: 'Complementa tu estilo con nuestros accesorios',
      imageSrc: 'https://images.unsplash.com/photo-1612902457652-33aff0a641fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80',
      imageAlt: 'Accesorios de moda en una tienda',
      href: '#',
    },
    {
      name: 'Ropa Deportiva',
      description: 'Encuentra ropa deportiva de calidad',
      imageSrc: 'https://images.unsplash.com/photo-1593419528756-3cdfa1615b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
      imageAlt: 'Ropa deportiva en una tienda',
      href: '#',
    },
    {
      name: 'Calzado',
      description: 'Descubre una amplia variedad de calzado',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1665664652418-91f260a84842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      imageAlt: 'Calzado de moda en una tienda',
      href: '#',
    },
    {
      name: 'Ropa Interior',
      description: 'Encuentra ropa interior cómoda y elegante',
      imageSrc: 'https://images.unsplash.com/photo-1628519555279-3eada894828b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      imageAlt: 'Ropa interior en una tienda',
      href: '#',
    },
  ];
  
  export default function Category() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-10">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }