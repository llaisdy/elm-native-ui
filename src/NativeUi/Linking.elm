module NativeUi.Linking exposing (Error, openUrl)

{-| elm-native-ui Linking

@docs Error, openUrl
-}

import Native.NativeUi.Linking
import Task exposing (Task)


{-| -}
type Error
    = Error String


{-| -}
openUrl : String -> Task Error ()
openUrl =
    Native.NativeUi.Linking.openUrl
