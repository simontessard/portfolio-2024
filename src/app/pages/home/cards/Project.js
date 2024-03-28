export function Project({ type }) {
    const spanClass = type === 'small' ? 'col-span-2' : 'col-span-3';

    return (
        <a href="#" className={`${spanClass} flex flex-col gap-3 justify-end p-4 h-72 bg-amber-600`}>
            <h4 className="text-3xl">Projet 1</h4>
            <span className="w-fit bg-white text-black text-sm py-2 px-3 rounded">HTML</span>
            <p>Lorem ipsum nadare</p>
        </a>
    );
}