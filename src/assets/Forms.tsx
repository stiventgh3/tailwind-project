import Boton from '../Boton'

export const Form = () => {
    return (
    <div className="flex flex-col ">
        <h2 className="text-xl font-bold my-4 text-center">
        Registrar productos
        </h2>
        <div className="flex gap-4 flex-col my-4 bg-gray-200 dark:bg-gray-700 p-5 rounded mx-auto w-1/2">
        <input
            className="p-2 border rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-500 w-full"
            type="text"
            name="nombre_producto"
            id="nombre"
            placeholder="Digite el nombre del producto"/>
        <input
            className="p-2 border rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-500 w-full"
            type="number"
            name="precio_producto"
            id="precio"
            placeholder="Digite el precio del producto"/>
        <Boton tipo="submit" className="w-full">
            Registrar
        </Boton>
        </div>
    </div>
        );
};