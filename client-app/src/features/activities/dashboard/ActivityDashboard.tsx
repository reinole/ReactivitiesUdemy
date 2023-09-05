import { Grid } from "semantic-ui-react"
import { Activity } from "../../../app/models/activity"
import ActivityList from "./ActivityList"
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"

interface Props {
    activities: Activity[]
    selectActivity: (id: string) => void
    selectedActivity: Activity | undefined
    cancelSelectActivity: () => void
    editMode: boolean
    handleFormOpen: (id?: string) => void
    handleFormClose: () => void
    handleCreateOrEditActivity: (activity: Activity) => void
    handleDeleteActivity: (id: string) => void
}

const ActivityDashboard = ({ activities, selectActivity, selectedActivity, cancelSelectActivity, editMode, handleFormClose, handleFormOpen, handleCreateOrEditActivity, handleDeleteActivity }: Props) => {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    handleDeleteActivity={handleDeleteActivity}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                <>
                    {selectedActivity && !editMode && (
                        <ActivityDetails
                            activity={selectedActivity}
                            cancelSelectActivity={cancelSelectActivity}
                            handleFormOpen={handleFormOpen}
                        />
                    )}

                    {editMode && (
                        <ActivityForm
                            activity={selectedActivity}
                            handleFormClose={handleFormClose}
                            handleCreateOrEditActivity={handleCreateOrEditActivity}
                        />
                    )}

                </>
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard