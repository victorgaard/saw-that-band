'use client';

import ErrorComponent from '../../components/error/Error';

function Error() {
  return (
    <ErrorComponent
      title="There was an error fetching this band details"
      message="No idea how this happened. I have never been in this situation before. Oh boy, this is weird. Why are you still here though? It's not like things will work like magic. Or will they? I don't know, maybe just reload or click 'Back' up there?"
    />
  );
}

export default Error;
