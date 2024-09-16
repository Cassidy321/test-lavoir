import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl text-gray-700 font-bold mb-6 text-center">Bienvenue sur notre application !</h1>
                <div className="flex flex-row justify-evenly h-full">
                    <Link href="/signup" className="text-gray-400">
                        S'inscrire
                    </Link>
                    <Link href="/login" className="text-gray-400">
                        Se connecter
                    </Link>
                </div>
            </div>
        </div>
    );
}
