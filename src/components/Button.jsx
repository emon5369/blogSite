
function Button({ children,
    type = 'button', bgColor = 'bg-blue-600', hover= 'opacity-80', textColor = 'text-white',
    className = '', ...props }) {     //props used to spread previous/additional properties
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} hover:${hover} ${textColor} ${className}`} {...props}>{children}</button>
    )
}

export default Button