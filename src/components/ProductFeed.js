import Product from "./Product";

const ProductFeed = ({ results }) => {
  return (
    <div className="grid  pt-10 md:p-0 md:-mt-40 grid-cols-1 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-333">
      {results.map((result, id) => (
        <Product
          key={id}
          id={id}
          category={result.category}
          image={result.image}
          title={result.title}
          price={result.price}
          description={result.description}
        />
      ))}
    </div>
  );
};

export default ProductFeed;
