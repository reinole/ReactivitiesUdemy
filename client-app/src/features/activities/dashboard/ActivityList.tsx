import { SyntheticEvent, useState } from "react"
import { Button, Item, Label, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"

interface Props {
    activities: Activity[]
    selectActivity: (id: string) => void
    handleDeleteActivity: (id: string) => void
    submitting: boolean
}


const ActivityList = ({ activities, selectActivity, handleDeleteActivity, submitting }: Props) => {
    const [target, setTarget] = useState('');

    const handleActivityDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setTarget(event.currentTarget.name);
        handleDeleteActivity(id);
    }

    if (activities.length === 0) return (
        <Segment>
            <Item.Group divided>
                <Item>
                    <Item.Content>
                        <Item.Header as='a'>No activities found</Item.Header>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )

    return (
        <Segment>
            <Item.Group divided>
                {activities && activities.map((activity: Activity) => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' onClick={() => selectActivity(activity.id)} />
                                <Button
                                    name={activity.id}
                                    loading={submitting && target === activity.id}
                                    floated='right'
                                    content='Delete'
                                    color='red'
                                    onClick={(e) => handleActivityDelete(e, activity.id)}
                                />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )

}

export default ActivityList