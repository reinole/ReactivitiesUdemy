import { ChangeEvent, useState } from "react"
import { Button, ButtonGroup, Form, Segment } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"

interface Props {
    activity: Activity | undefined
    handleFormClose: () => void
    handleCreateOrEditActivity: (activity: Activity) => void
    submitting: boolean
}

const ActivityForm = ({ activity, handleFormClose, handleCreateOrEditActivity, submitting }: Props) => {
    const initialState = activity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activityState, setActivityState] = useState(initialState)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setActivityState({ ...activityState, [name]: value })
    }


    const handleSubmit = () => {
        handleCreateOrEditActivity(activityState);
    }

    return (
        <Segment>
            <Form initialValues={initialState} onSubmit={() => console.log('submit')} autoComplete='off'>
                <Form.Input
                    value={activityState.title}
                    onChange={handleInputChange}
                    name='title'
                    placeholder='Title' />
                <Form.TextArea
                    value={activityState.description}
                    onChange={handleInputChange}
                    name='description'
                    placeholder='Description' />
                <Form.Input
                    value={activityState.category}
                    onChange={handleInputChange}
                    name='category'
                    placeholder='Category' />
                <Form.Input
                    value={activityState.date}
                    onChange={handleInputChange}
                    type="date"
                    name='date'
                    placeholder='Date' />
                <Form.Input
                    value={activityState.city}
                    onChange={handleInputChange}
                    name='city'
                    placeholder='City' />
                <Form.Input
                    value={activityState.venue}
                    onChange={handleInputChange}
                    name='venue'
                    placeholder='Venue' />
                <ButtonGroup widths='2'>
                    <Button loading={submitting} onClick={handleSubmit} floated='right' positive type='submit' content='Submit' />
                    <Button onClick={handleFormClose} floated='right' type='button' content='Cancel' />
                </ButtonGroup>
            </Form>
        </Segment>
    )
}

export default ActivityForm