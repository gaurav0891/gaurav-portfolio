export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #334155', padding: '2rem 0', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
      <p>© {new Date().getFullYear()} Gaurav Sharma. Built with React.js & Vite.</p>
    </footer>
  );
}