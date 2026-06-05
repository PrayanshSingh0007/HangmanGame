function getButtonStyling(styleType) {
    if (styleType === 'primary') {
        return 'inline-flex w-fit items-center justify-center rounded-md bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700';      
    } else if (styleType === 'secondary') {
        return 'inline-flex w-fit items-center justify-center rounded-md bg-gray-500 px-4 py-2 font-bold text-white transition-colors hover:bg-gray-700';
    } else if (styleType === 'error') {
        return 'inline-flex w-fit items-center justify-center rounded-md bg-red-500 px-4 py-2 font-bold text-white transition-colors hover:bg-red-700';
    } else if (styleType === 'success') {
        return 'inline-flex w-fit items-center justify-center rounded-md bg-green-500 px-4 py-2 font-bold text-white transition-colors hover:bg-green-700';
    } else if (styleType === 'warning') {
        return 'inline-flex w-fit items-center justify-center rounded-md bg-yellow-500 px-4 py-2 font-bold text-gray-900 transition-colors hover:bg-yellow-700';
    }

    return 'inline-flex w-fit items-center justify-center rounded-md bg-slate-500 px-4 py-2 font-bold text-white transition-colors hover:bg-slate-600';
}
    
export default getButtonStyling;