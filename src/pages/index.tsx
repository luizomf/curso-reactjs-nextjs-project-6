import { useEffect } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'otavio-miranda',
    }).then((r) => {
      console.log(r.setting, r.posts);
    });
  }, []);

  return <h1>OI</h1>;
}
