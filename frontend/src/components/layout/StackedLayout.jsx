function StackedLayout({title, children, buttons}) {
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="items-start justify-between py-4 border-b md:flex">
                        <div>
                            <h3 className="text-gray-800 text-2xl font-bold">{title}</h3>
                        </div>
                        <div className="items-center gap-x-3 mt-6 md:mt-0 sm:flex">
                            {buttons}
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-grow">
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
            </main>
        </>
    );
}

export default StackedLayout;
