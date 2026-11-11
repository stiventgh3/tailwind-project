export const Grid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} className="bg-gray-300 p-6 rounded">{n}</div>
      ))}
    </div>
  );
};