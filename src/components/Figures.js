import React from 'react'

const Figures = ({ figures }) => {
    return (
        <div>
        <center><h1>Contact List</h1></center>
    {figures.map((figure) => (
            <div class="card">
        <div class="card-body">
        <h5 class="card-title">{figure.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{figure.email}</h6>
        <p class="card-text">{figure.company.catchPhrase}</p>
        </div>
        </div>
))}
</div>
)
};

export default Figures