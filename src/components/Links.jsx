import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Links = ({ className }) => {

    return (
        <>
            <div className={`flex gap-8 z-10 ${className}`}>
                <a href="https://github.com/cheyennechau" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="fill-white size-7 opacity-30 hover:opacity-80 transition-opacity duration-400" />
                </a>
                <a href="https://linkedin.com/in/cheyenne-chau" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="fill-white size-7 opacity-30 hover:opacity-80 transition-opacity duration-400" />
                </a>
                <a href="mailto:cnchau@usc.edu">
                    <FaEnvelope className="fill-white size-7 opacity-30 hover:opacity-80 transition-opacity duration-400" />
                </a>
            </div>
        </>
    );
};

export default Links;