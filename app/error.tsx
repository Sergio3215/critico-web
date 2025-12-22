'use client'

import { useEffect } from 'react'
import { AlertTriangle, RotateCcw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-3xl shadow-2xl max-w-lg w-full flex flex-col items-center">
                <div className="bg-yellow-500/10 p-4 rounded-full mb-6 relative">
                    <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full" />
                    <AlertTriangle className="w-16 h-16 text-yellow-400 relative z-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">¡Algo salió mal!</h2>
                <p className="text-blue-200/60 mb-8 max-w-md">
                    Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado.
                </p>
                <button
                    onClick={() => reset()}
                    className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                    <RotateCcw className="w-5 h-5" />
                    Intentar de nuevo
                </button>
            </div>
        </div>
    )
}
