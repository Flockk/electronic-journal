import React from 'react';

const Section = ({id, title, content}) => {
    return (
        <section id={id} className="mb-16">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <section className="text-gray-600 body-font">
                <div className="relative container mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        {content}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Section;