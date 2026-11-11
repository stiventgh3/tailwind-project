export const Flex = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 text-center">
      {[1, 2, 3].map((n) => (
        <div key={n} className="bg-gray-300 p-6 rounded flex-1">{n}</div>
      ))}
    </div>
  );
};