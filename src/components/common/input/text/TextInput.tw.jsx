export default function TextInputTw({ label, placeholder, activeValue, setActiveValue }) {

    return (
        <div
            className="relative m-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-0 focus-within:ring-blue-600">
            <label
                htmlFor="input"
                className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
                { label }
            </label>
            <input
                type="text"
                name="input"
                id="input"
                value={ activeValue }
                onChange={ ({ target }) => setActiveValue(target.value) }
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder={ placeholder }
            />
        </div>
    );
}
