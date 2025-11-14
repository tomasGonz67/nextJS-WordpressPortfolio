import ChatBot from "./ChatBot";
export default function Footer(){
    return(
        <footer className="flex-wrap items-center justify-center mt-8">

            <p className="text-gray-300">Website made with NextJS (SSG), Typescript, Wordpress, and WPgraphQL.</p>
            <div className="row-start-3 flex gap-[24px] items-center justify-center pt-4">
                <a href="https://github.com/tomasGonz67" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" stroke="black" fill="white" viewBox="0 0 24 24">
                        <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7-1 .7-1-1.4-.1-2.8-.7-2.8-3.1 0-.7.2-1.3.6-1.8-.1-.2-.3-.9.1-1.9 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.1-1.5 3.1-1.2 3.1-1.2.4 1 .2 1.7.1 1.9.4.5.6 1.1.6 1.8 0 2.4-1.4 3-2.8 3.1.3.2.7.9.7 1.8v2.6c0 .3.2.7.8.6A12 12 0 0 0 12 0Z"/>
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/tomas-gonzalez-4aa6372b0/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" stroke="black" fill="white" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.2 4.2-2.2 4.5 0 5.3 3 5.3 6.9V24h-5V15c0-2.1 0-4.8-3-4.8s-3.5 2.2-3.5 4.6V24h-5V8z"/>
                    </svg>
                </a>
            </div>
            <ChatBot />

            
        </footer>
    )
}