import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: '20px' }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
