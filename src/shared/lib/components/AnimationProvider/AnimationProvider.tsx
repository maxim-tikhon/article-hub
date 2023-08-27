import {
  createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

// get libaries types
type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// Gesture depend on Spring => parallel lazy import
const getAsyncAnimationModules = async () => Promise.all([
  import('@react-spring/web'),
  import('@use-gesture/react'),
]);

// Sequential import
// const getAsyncAnimationModules2 = async () => {
//   const Spring = await import('@react-spring/web'),;
//   const Gesture = await import('@use-gesture/react'),;
// };

export const useAnimationLibs = () => useContext(AnimationContext) as Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
  // we use refs to keep access to libraries between re-renders
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(() => ({
    Gesture: GestureRef.current,
    Spring: SpringRef.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
