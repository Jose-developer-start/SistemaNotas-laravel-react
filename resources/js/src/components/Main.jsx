import React from 'react';

export default function Main({ title,description,children }) {
    return (
        <main class="app-content">
            <div class="app-title">
                <div>
                    <h1><i class="fa fa-dashboard"></i> {title}</h1>
                    <p>{ description }</p>
                </div>
            </div>
            {children}
        </main>
    );
}
