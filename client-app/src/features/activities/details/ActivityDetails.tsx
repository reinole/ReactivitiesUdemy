import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    cancelSelectActivity: () => void;
    handleFormOpen: (id: string) => void;

}

const ActivityDetails = ({ activity, cancelSelectActivity, handleFormOpen }: Props) => {
    if (!activity) return (<h2>Activity not found</h2>);

    return (
        <Card fluid>
            <Image
                src={`/assets/categoryImages/${activity.category}.jpg`}
            />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>{activity.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button
                        onClick={() => handleFormOpen(activity.id)}
                        basic
                        color='blue'
                        content='Edit'
                    />
                    <Button
                        onClick={cancelSelectActivity}
                        basic
                        color='grey'
                        content='Cancel'
                    />
                </Button.Group>
            </Card.Content>
        </Card>
    );
};

export default ActivityDetails;