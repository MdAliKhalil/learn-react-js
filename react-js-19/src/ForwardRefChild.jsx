const ForwardRefChild = ({ refer }) => {
    return (
        <>
            <h1>Name</h1>
            <input type="text" placeholder="Enter your name" ref={refer} />
        </>
    );
}

export default ForwardRefChild;