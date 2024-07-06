import React from 'react'
import "./ServiceDomainCards.css";
import serviceDomainCardArray from "../Data/ServiceDomainCardData";
export default function ServiceDomainCards() {
  return (
    <>
    {serviceDomainCardArray.map((data) => (
     <div class="DomainCardcontainer">
        <div class="Domain-card">
            <div class="Domainface Domainface1">
                <div class="Domain-content">
                    <h3>{data.heading}</h3>
                </div>
            </div>
            <div class="Domainface Domainface2">
                <div class="Domain-content">
                    <p>{data.content}</p>
                </div>
            </div>
        </div>
        
    </div>
    ))}
    </>
  )
}
