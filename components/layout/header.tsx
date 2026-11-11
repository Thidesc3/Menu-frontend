import { SpotButton } from "@/assets/cases/spots/components/spot-button";
import logomarca from "@/assets/logomarca.svg"

export function Header() {
    return (
        <header className="bg-transparent text-brand-foreground">
            <div className="mx-auto flex w-full items-center justify-between px-6 py-4">
                <img src={logomarca} alt="Logo" className="h-auto w-48" />
                <div>
                    <SpotButton />
                </div>
            </div>
        </header>
    )
}