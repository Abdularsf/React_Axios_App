export const Form = () => {
    return (
        <Form>
            <div>
                <label htmlFor="title"></label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Add Tile"
                    autoComplete="off"
                />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    name="body"
                    id="body"
                    autoComplete="off"
                    placeholder="Add Text"
                />
            </div>
        </Form>
    )
}