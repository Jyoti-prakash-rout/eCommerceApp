import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="mt-5 text-3xl font-bold mb-6">🛒Product Catalog</h1>

      <ProductList />
    </div>
  );
};

export default App;
