import React from 'react'
import { Button, Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import './styles.css'

export default function index({title, subtitle, description}) {
    return (
        <div>
            <Card className="bg-grey">
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{subtitle}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                    <CardText>{description}</CardText>
                    <CardLink href="#">Card Link</CardLink>
                    <CardLink href="#">Another Link</CardLink>
                </CardBody>
            </Card>
        </div>
    )
}
