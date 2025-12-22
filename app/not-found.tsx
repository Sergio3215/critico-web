import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl max-w-lg w-full flex flex-col items-center">
                <div className="bg-red-500/10 p-4 rounded-full mb-6 relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                    <AlertCircle className="w-16 h-16 text-red-400 relative z-10" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-200 to-red-400 bg-clip-text text-transparent mb-4">404 - Página no encontrada</h2>
                <p className="text-blue-100/60 text-lg mb-8">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
                <Link
                    href="/"
                    className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    )
}
