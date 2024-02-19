import { Button, Card, CardActions, CardHeader, IconButton } from "@mui/material"
import { CardItem } from "./CardItem"
import { useState } from "react";
import { MoreHoriz } from "@mui/icons-material";

export const CardList = ({data}) => {

    const {heading, items=[],_id} = data;
    const filteredList = items.map(item=>({item, readOnly: true}))
    const [updatedItems, setItems] = useState(filteredList);

    const handleAdd= () => {
        setItems([...updatedItems, {item: "", readOnly: false}]);
    }

    return (
        <Card sx={{ minWidth: 300, padding: 2, marginRight: 3,alignSelf:"start" }}>
            <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz />
                    </IconButton>
                }
                title={heading}
            />
            {
                updatedItems?.map(({item, readOnly})=><CardItem title={item} readOnly={readOnly} id={_id} setItems={setItems} updatedItems={updatedItems}/>)
            }
            <CardActions>
                <Button size="small" color="primary" onClick={handleAdd}>
                    + Add a Card
                </Button>
            </CardActions>
        </Card>
    )
}