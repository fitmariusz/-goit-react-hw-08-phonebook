const styles = {
  container: {
    // minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
            margin: '50px auto',
        flexDirection: 'column',
        padding: '60px',
        backgroundColor: 'black',
        width: '500px',
        borderRadius: '100px',
        boxShadow: 'rgba(160, 158, 161, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 0px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
        color: "burlywood",

  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcom in Phonebook.
      </h1>
    </div>
  );
}
